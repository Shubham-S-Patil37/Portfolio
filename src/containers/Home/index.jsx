import React from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin, faConnectdevelop, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from "./../../components/Nav/index"
import homeBG from "../../assets/slider-bg.jpg"
import profile from "../../assets/profile2.png"

import cv from "../../assets/Shubham_Patil Resume.pdf"

import "../Home/home.css"

const Home = () => {

    const socialMedia = [
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://github.com/Shubham-S-Patil37" },
        // { "Name": "Instagram", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
    ]

    const homeIntoCard = [
        { "icon": faConnectdevelop, "title": "Technology", "description": "" },
        { "icon": faPhoenixFramework, "title": "Dedication", "description": "" },
        { "icon": faPersonWalking, "title": "Smart work", "description": "" }
    ]
    const onClickSocialMediaIcon = (url) => {
        window.open(url, "_blank");
    }

    const onClickDownloadCV = () => {
        window.open(url, "_blank");
    }

    return (
        <div>
            <Nav />
            <div className='home-parent'>
                <div className="img-wrapper">
                    <img src={homeBG} alt="Background" className='home-back-img' />
                </div>
                {/* ********************************************************************** HOME ********************************************************************** */}
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
                                            options={{ strings: ['Software Developer', 'Freelancer'], autoStart: true, loop: true, }}
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
                                <a href={cv} download="Shubham_CV.pdf" >
                                    <button className='download-cv' onClick={onClickDownloadCV} >Download CV</button>
                                </a>
                            </div>
                        </div>
                        <div className='home-section-2'>
                            <img src={profile} alt="Background" />
                        </div>
                    </div>

                </div>
                <div style={{ height: "30rem" }}>
                    <div className='home-card-parent'>

                        {
                            homeIntoCard.map((ele) =>
                                <div className='home-card'>
                                    <div>
                                        <FontAwesomeIcon icon={ele.icon} style={{ marginTop: "10px", padding: "10px", height: "45px", width: "45px" }} />
                                    </div>
                                    <div style={{ padding: "10px", fontSize: "30px" }}>
                                        {ele.title}
                                    </div>

                                    <div style={{ padding: "10px", fontSize: "15px" }}>
                                        Hi this is shubham patil which is best developer in the word. Which make software very creative and effective which make software soft and unique.
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                {/* ********************************************************************** HOME ********************************************************************** */}
            </div>


        </div>
    )
}

export default Home