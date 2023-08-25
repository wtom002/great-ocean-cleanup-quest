import React from 'react';
import Game from './Game'

export function GamePage(props) {
    

    return (
        <div>
            <div style={{backgroundColor: '#202444', marginBottom: '-20px'}}>
                <img src={'./imgs/gamepgheaderimg.png'} alt='Header' width='100%' 
                    style={{
                        backgroundColor: '#202444', marginBottom: '-20px'
                }}/>
            </div>
            <div 
            style={{
                backgroundColor: '#202444',
                padding: '10px'
            }}>
                <img
                    src={'./imgs/tutorial.png'} 
                    alt='Tutorial' 
                    className="img-fluid mx-auto d-block"
                    width='60%'
                    style={{
                        backgroundColor: '#202444',
                        borderRadius: '10px',
                        paddingTop: '50px'
                }}
                />
            </div>
            <div className='game-background-border' style={{backgroundColor: '#202444'}}>
                <Game/>
            </div>
        </div>
    )
}