import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';

import ProgressBar from "@ramonak/react-progress-bar";

import "./cards.css"

const Card = ({ title, completed }) => {
    return (
        <div className="card-parent">
            <div className='title'>{title}</div>
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