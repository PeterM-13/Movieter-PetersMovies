import "./index.css"
import placeholderImage from '../images/MoviePlaceHolder.png';

import React, { useState } from 'react';

export default function Tile({num, title, dscp, img, mov}){
    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <div className={`${num} Tile`} onClick={() => {
            window.open(mov, '_blank');
          }}>
            <img src={img} alt="Movie Cover" onError={(e) => {e.target.src = placeholderImage;}}/>
            <h2>{title}</h2>
            {
                dscp.length < 120 || isExpanded
                ? <p>{dscp}</p> 
                : <p>{dscp.slice(0, 115)}...<a href="/" onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setIsExpanded(!isExpanded);
                }}>see more</a></p>
            }
            
        </div>
    )
}