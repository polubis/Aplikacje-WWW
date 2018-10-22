import React from 'react'
import './track.css';

const track = ({index, currentPlayingSoundIndex, item, functionReference}) => (
    <li onClick={() => functionReference(item)} className={`track ${currentPlayingSoundIndex === index ? "current-playing-track" : ""}`}>
        {console.log(currentPlayingSoundIndex, index)}
        <p className="title-p">
            <span>{item.name}</span>
            <span>{item.addDate}</span>
        </p>
        <div className="image-artist-container">
            <div className="small-img-container" style={{backgroundImage: `${item.img}`}} />
            <div className="artist">
                {item.artist}
            </div>
        </div>
        
    </li>
);

export default track;