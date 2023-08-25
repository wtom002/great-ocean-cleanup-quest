import React from 'react';

export function Home(props) {
    const titleStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Patrick Hand SC',
        fontSize: '128px',
        fontWeight: 'bold'
    };

    return (
        <div
            style={{backgroundColor: '#202444'
        }}>
            <img src='./imgs/homepghead.gif' alt="Home Page GIF of animated whale" width='100%' className="img-fluid mx-auto d-block"/>
            <img src='./imgs/infographic.png' alt="infographic" width='100%' className="img-fluid mx-auto d-block"/>
            <div style={titleStyle}>
                The Great Ocean Cleanup Quest
            </div>
        </div>
    )
}