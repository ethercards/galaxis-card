import React, { useEffect, useRef, useState } from 'react';
import './UpcomingCard.css'

const UpcomingCard = (props) =>{
    return <div className='upcoming-dust-pool-card'>
        <img src={props.imgSrc}/>
        <div className='upcoming-dust-pool-card-text'>
            <div className='upcoming-dust-pool-card-title'>{props.name}</div>
            <p>{props.price} D</p>
        </div>
    </div>
}

export default UpcomingCard;