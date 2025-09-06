import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';

import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./cards.css"

const Card = ({ title, completed, icon, exp, color = "#F0BF55" }) => {
    return (
        <div className="card-parent">
            <div className='icon-parent'>
                <FontAwesomeIcon icon={icon} className='icon' style={{ color: color }} />
            </div>
            <div className="card-content">
                <div className='title'>{title}</div>
                <div className='sub-title'>{exp} year{exp > 1 ? 's' : ''} of experience</div>
            </div>
            <div className='progress-bar-parent'>
                <ProgressBar
                    completed={completed}
                    bgColor={color}
                    isLabelVisible={false}
                    className='wrapper'
                    height='6px'
                    width='100%'
                    labelColor="transparent"
                />
            </div>
        </div>
    )
}
export default Card