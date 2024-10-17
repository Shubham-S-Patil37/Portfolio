import React from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from "./../../components/Nav/index"
import homeBG from "../../assets/slider-bg.jpg"
import profile from "../../assets/profile2.png"

import "../Home/home.css"

const Home = () => {

    const socialMedia = [
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://github.com/Shubham-S-Patil37" },
        // { "Name": "Instagram", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
    ]

    const onClickSocialMediaIcon = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div>
            <Nav />
            <div className='home-parent'>
                <diV className="img-wrapper">
                    <img src={homeBG} alt="Background" className='home-back-img' />
                </diV>

                <div className='home-container'>
                    <div style={{ display: "flex" }}>
                        <div className='home-section-1'>
                            <div >
                                <div className='dev-title-1'>
                                    Hello I' M
                                </div>
                                <div className='dev-title-2'>
                                    Shubham Patil
                                </div>
                                <div className='dev-title-3'>
                                    <span> A passionate </span>
                                    {/* <samp style={{ color: "#32CD32" }}> Software Developer </samp> */}
                                    <samp style={{ color: "#32CD32" }}>
                                        <Typewriter
                                            options={{
                                                strings: ['Software Developer', 'Freelancer'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </samp>
                                </div>
                            </div>

                            <div className='social-icon-parent'>
                                {
                                    socialMedia.map((ele) =>
                                        <FontAwesomeIcon icon={ele.icon} className='social-icon-item' onClick={() => { onClickSocialMediaIcon(ele.url) }} />
                                    )
                                }
                            </div>
                            <div >
                                <button className='download-cv' >Download CV</button>
                            </div>
                        </div>
                        <div className='home-section-2'>
                            <img src={profile} alt="Background" />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Home