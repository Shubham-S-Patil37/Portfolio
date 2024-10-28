import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';

import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./cards.css"

const Card = ({ title, completed, icon, exp }) => {
    return (
        <div className="card-parent">
            <div className='icon-parent'>
                <FontAwesomeIcon icon={icon} className='icon' />
            </div>
            <div>
                <div className='title'>{title}</div>
                <div className='sub-title'>{exp} years of experience</div>
            </div>
            <div className='progress-bar-parent'>
                <ProgressBar completed={completed}
                    bgColor="#F0BF55"
                    isLabelVisible={false}
                    className='wrapper'
                    height='1vh'
                    width='100%'
                />
            </div>
        </div>
    )
}
export default Card