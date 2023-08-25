import React, { useState, useEffect } from 'react';

const GRID_SIZE = 32; // number of rows
const SPRITE_INITIAL_POSITION = { x: 0, y: 0 };
const COLLECTIBLE_COUNT = 15; // number of random collectible entities

// diff images for facing diff directions
const spriteRight = 'clown-fish-right';
const spriteLeft = 'clown-fish-left';
const spriteUp = 'clown-fish-up';
const spriteDown = 'clown-fish-down';

const backgroundImagePath = './imgs/gamebackground.gif'; 
const collectibleImagesFolder = './imgs/trash/'; 
const obstacleImagePath = './imgs/obstacles/seaweed.png';

const Game = () => {
  const [spritePosition, setSpritePosition] = useState(SPRITE_INITIAL_POSITION);
  const [collectibles, setCollectibles] = useState([]);
  const [obstacles, setObstacles] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [spriteDirection, setSpriteDirection] = useState(spriteRight); // changes image path based on last pressed key
  
  const spriteImagePath = `./imgs/${spriteDirection}.png`;

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key === 'w') {
        moveSprite(0, -1); // up
        //setSpriteDirection(spriteUp);
      } else if (key === 's') {
        moveSprite(0, 1); // down
        //setSpriteDirection(spriteDown);
      } else if (key === 'a') {
        moveSprite(-1, 0); // left
        setSpriteDirection(spriteLeft);
      } else if (key === 'd') {
        moveSprite(1, 0); // right
        setSpriteDirection(spriteRight);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [obstacles]);

    // Generate random obstacles
    const generateObstacles = () => {
      const newObstacles = [];

      for (let i = 0; i < GRID_SIZE; i++) {
        const obstacle = generateRandomEntityPosition(obstacles, collectibles);
        obstacle.imagePath = getRandomObstacleImagePath();
        newObstacles.push(obstacle);
      }

      setObstacles(newObstacles);
    };

    // Generate random collectible entities
    const generateCollectibles = () => {
      const newCollectibles = [];

      for (let i = 0; i < COLLECTIBLE_COUNT; i++) {
        const collectible = generateRandomEntityPosition(newCollectibles, obstacles);
        collectible.imagePath = getRandomCollectibleImagePath();

        newCollectibles.push(collectible);
      }

      setCollectibles(newCollectibles);
    };

    // generateCollectibles();
  // }, [obstacles]);
  useEffect(() => {
    generateObstacles();
  }, []);

  useEffect(() => {
    generateCollectibles();
  }, []);

  // Trash collection
  useEffect(() => {
    if(collectibles.length > 0) {
      const handleCollectTrash = () => {
        const newCollectibles = collectibles.filter(
          (collectible) => collectible.x !== spritePosition.x || collectible.y !== spritePosition.y
        );
        setCollectibles(newCollectibles);

        // Game over when there're no collectibles
        if (newCollectibles.length === 0) {
          setIsGameOver(true);
        }
      };

      handleCollectTrash();
  }
  }, [spritePosition, collectibles]);

  // Reset game
  const resetGame = () => {
    setSpritePosition(SPRITE_INITIAL_POSITION);
    setCollectibles([]);
    setObstacles([]);
    setIsGameOver(false);
    generateCollectibles();
    generateObstacles();
  };

const generateRandomEntityPosition = (existingEntities, conflictingEntities) => {
    let position;
    let isConflicting = false;
  
    do {
      position = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE/2),
      };
      
  
      // Check for conflicts with existing entities of the same type
      const isExistingConflict = existingEntities.find((entity) => entity.x === position.x && entity.y === position.y);
  
      // Check for conflicts with entities of the other type
      const isConflictingConflict = conflictingEntities.find(
        (entity) => entity.x === position.x && entity.y === position.y
      );
  
      isConflicting = isExistingConflict || isConflictingConflict;
    } while (isConflicting);
  
    return position;
  };


  const moveSprite = (deltaX, deltaY) => {
    if (isGameOver) { // Prevents movement when game is over
      return;
    }
    setSpritePosition((prevPosition) => {
      const newPosition = {
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      };

      if (newPosition.x < 0 || newPosition.x >= GRID_SIZE || newPosition.y < 0 || newPosition.y >= GRID_SIZE/2) {
        return prevPosition; 
      }

      const obstacle = obstacles.find((obstacle) => obstacle.x === newPosition.x && obstacle.y === newPosition.y);

      if (obstacle) {
        return prevPosition; 
      }

      return newPosition;

    });
  };

  const getRandomCollectibleImagePath = () => {
    const images = [
      'bag.png',
      'bottle.png',
      'bottle2.png',
      'straw.png',
      'blue-cup.png',
      'co2.png'
      // imgs go here
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return `${collectibleImagesFolder}/${images[randomIndex]}`;
  };
  const getRandomObstacleImagePath = () => {
    const images = [
      'rock2.png',
      'rock3.png',
      'seaweed.png',
      'seaweed2.png',
      'coral.png',
      'turtle2.png',
      // imgs go here
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return `./imgs/obstacles/${images[randomIndex]}`;
  };

  return (
    <div 
        style={{ 
            height: '100vh', 
            padding: '50px'
    }}>
      <div>
        <table
          style={{
            backgroundImage: `url(${backgroundImagePath})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            alignSelf: 'center',
            
            //className: "img-fluid mx-auto d-block",
          }}
        >
          <tbody
            style={{paddingBottom: '20px'}}
            >
            {Array.from({ length:  GRID_SIZE/2}, (_, row) => (
              <tr key={row}>
                {Array.from({ length: GRID_SIZE }, (_, col) => {
                    const isSpriteHere = spritePosition.x === col && spritePosition.y === row;
                    const collectible = collectibles.find(
                        (collectible) => collectible.x === col && collectible.y === row
                        );
                    const isObstacle = obstacles.find(
                        (obstacle) => obstacle.x === col && obstacle.y === row
                        );
                  return (
                    <td
                        key={col}
                        style={{
                             width: '50px',
                             height: '60px',
                            border: '0px solid black',
                            backgroundImage: isSpriteHere ? `url(${spriteImagePath})` : '',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: collectible ? 'transparent' : isObstacle? 'transparent': 'transparent',
                            backgroundPosition: collectible ? 'center' : '',
                            boxSizing: 'border-box',
                        }}
                        >
                        {collectible && (
                            <img
                            src={collectible.imagePath}
                            alt="Collectible"
                            style={{ width: '100%', height: '100%' }}
                            />
                        )}
                        {isObstacle && (
                          <img
                            src={isObstacle.imagePath}
                            alt="Obstacle"
                            style={{ width: '100%', height: '100%', objectFit: 'cover',}}
                          />
                        )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isGameOver ? (
        <div style={{ 
            position: 'fixed', 
            width: '100%', 
            height: '100%', 
            top: 0, 
            left: 0, 
            background: 'rgba(0, 0, 0, 0.7)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
          <div style={{ 
              background: 'rgba(173, 216, 230, 0.7)', 
              padding: '20px', 
              borderRadius: '15px',
              textAlign: 'center'
            }}>
            <h2>Game Completed</h2>
            <button onClick={resetGame} style={{ marginTop: '20px' }} className='btn btn-success'>Play Again!</button>
          </div>
        </div>
      ): null}


    </div>
  );
};

export default Game;
