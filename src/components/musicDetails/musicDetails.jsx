import React from 'react';
import './musicDetails.css';

const musicDetails = ({play, stop, pause, reference, isPlaying, currentPlayingItem, ...audioControls}) => (
    <div className="audio-container">
        <audio {...audioControls} src={currentPlayingItem.src} ref={reference} />
        
        <div className="image-container" style={{backgroundImage: `url(${currentPlayingItem.img})`}}></div>
        
        <header>
            <p><span>Actual playing sound name: </span> <b>{currentPlayingItem.name}</b></p>
            {currentPlayingItem.artist && 
                <p><span>Artist: </span> <b>{currentPlayingItem.artist}</b></p>
            }
            <p><span>Add date: </span> <b>{currentPlayingItem.addDate}</b></p>

            {isPlaying && 
                <div className="timer" />
            }
        </header>

        <div className="btns-holder">
            <button onClick={play}>Play</button>
            <button onClick={stop} className="pause-btn">Pause</button>
        </div>
    </div>
);


export default musicDetails;