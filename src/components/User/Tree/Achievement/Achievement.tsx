import React from 'react';
import './Achievement.scss';
import achievementImage from './achievement.png';

function Achievement() {
    return (
        <div className="achievement-block">
            <div className="achievement-img">
                <img src={achievementImage} alt=""/>
            </div>
            <div className="achievement-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    );
}

export default Achievement;