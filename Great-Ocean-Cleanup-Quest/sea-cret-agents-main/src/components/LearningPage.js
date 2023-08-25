import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { EducationalResourcePage } from './EducationalResourcePage';

export function LearningPage() {

    const flashCards = [
        {front: './imgs/turtle.png', back: 'Marine turtles consume a lot of plastic during a critical stage of their development, especially since these areas of the ocean are highly polluted. This situation could be seen as an evolutionary trap for the turtles.'},
        {front: './imgs/whale.png', back: 'Underwater noise pollution from commercial shipping, particularly from low-frequency background noise affects whales physically and behaviorally, leading to chronic stress and hidden deaths at sea.'},
        {front: './imgs/cruise.png', back: 'The global ocean and its marine biodiversity are facing significant risks due to anthropogenic impacts. These include pollution, global warming, and acidification caused by CO2 emissions.'},
        {front: './imgs/boat.png', back: 'Most marine plastic is found in the upper layers of the water column, where important biogeochemical processes occur, affecting marine productivity and food webs.'},
      ]; 

    const actionCards = [
      {front: "./imgs/action-card1.jpeg", back: 'Click to watch the video', link: 'https://youtu.be/mV6X7ZKGyRU'},
      {front: "./imgs/action-card2.jpeg", back: 'Click to watch the video', link: 'https://youtu.be/xFPoIU5iiYQ'},
    ]
    
    return (
      <div className='learning-page'>
        <HeaderComponent />
        <div className='d-flex align-items-center justify-content-center'>
          <img src='./imgs/click-cards.png' alt="Learning Page Fish & Text" width='30%'/>
        </div>
        <div className="flash-cards pt-5">
          {flashCards.map((card, index) => (
            <FlashCard key={index} front={card.front} back={card.back} />
          ))}
        </div>
        <div className="action-cards">
        {actionCards.map((card, index) => (
          <ActionCards key={index} front={card.front} back={card.back} link={card.link}/>
        ))}
        </div>
      </div>
    );
}

const HeaderComponent = (() => {
  return (
    <>
      <img className='pl-5' src='./imgs/learningHeader.png' alt="Learning Page Fish & Text" width='100%'/>
    </>
  )
})

const FlashCard = ({front, back}) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}>
          <img src={front} alt='Flash Card Front'/>
        </div>
  
        <div onClick={handleClick}>
            <p>{back}</p>
        </div>
      </ReactCardFlip>
    );
  };


const ActionCards = ({front, back, link}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick}>
        <img src={front} alt='Flash Card Front'/>
      </div>

      <div onClick={handleClick}>
          <a href={link}><p>{back}</p></a>
      </div>
    </ReactCardFlip>
  );
};