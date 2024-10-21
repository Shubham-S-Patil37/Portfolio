import React from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin, faConnectdevelop, faPhoenixFramework, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalking, faUsers, faFeather, faChalkboard, faDoorOpen, faExplosion } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Nav from "./../../components/Nav/index"
import homeBG from "../../assets/slider-bg.jpg"
import profile from "../../assets/profile2.png"

import myServiceImage from "../../assets/serive_back1.png"
import creativeDesign from "../../assets/creativeDesign.png"
import responsiveWeb from "../../assets/responsiveWeb.png"
import connection from "../../assets/connection.png"

import cv from "../../assets/Shubham_Patil Resume.pdf"

import "../Home/home.css"

const Home = () => {

    const socialMedia = [
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://github.com/Shubham-S-Patil37" },
        // { "Name": "Instagram", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
    ]

    const homeIntoCard = [
        { "icon": faConnectdevelop, "title": "Technology", "description": "Experienced in a diverse range of technologies, including front-end and back-end development, ensuring seamless integration, scalable solutions, and optimal performance." },
        { "icon": faPhoenixFramework, "title": "Problem Solving", "description": "Effective problem-solving involves analyzing challenges, identifying root causes, and implementing practical solutions. It requires critical thinking, creativity, and technical expertise to overcome obstacles efficiently." },
        { "icon": faPersonWalking, "title": "Smart Coding", "description": "A focus on smart work ensures efficient solutions with minimal effort and maximum impact. Writing clean, optimized code across enables seamless integration and high performance." },
        { "icon": faChessQueen, "title": "Strategic Thinking", "description": "Strategic thinking involves planning with foresight, setting clear objectives, and aligning resources to achieve long-term goals. It emphasizes evaluating risks, identifying opportunities, and making data-driven decisions." },
    ]

    const myServiceInfo = [
        { "icon": faFeather, "title": "Creative Design" },
        { "icon": faChalkboard, "title": "Efficient Website" },
        { "icon": faCloudflare, "title": "Seamless API Integration" },
        { "icon": faUsers, "title": "User-Friendly UI/UX" },
        { "icon": faDoorOpen, "title": "Microservices Expertise" },
        { "icon": faExplosion, "title": "Performance Optimization" },
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
                {/* <div className='home-card-primary'>
                    <div className='home-card-parent'>
                        {
                            homeIntoCard.map((ele) =>
                                <div className='home-card'>
                                    <div>
                                        <FontAwesomeIcon icon={ele.icon} className='home-card-icon' />
                                    </div>
                                    <div className='home-card-title'>
                                        {ele.title}
                                    </div>

                                    <div className='home-card-description'>
                                        {ele.description}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div> */}

                <div>
                    <div className='service-parent'>
                        <div className='service-section-1'>
                            <img src={myServiceImage} style={{ height: "100%", width: '100%' }} />
                        </div>
                        <div className='service-section-2'>
                            <div className='service-section-2-title' >What kind of services i provides</div>
                            <div className='service-section-2-description'>
                                I offer innovative digital solutions tailored to meet business needs, ensuring high performance, security, and seamless user experiences. My services focus on delivering scalable, efficient, and modern technology solutions with precision and creativity.
                            </div>

                            <div className='service-item-parent'>

                                {
                                    myServiceInfo.map((ele) =>
                                        <span className='service-item'>
                                            <FontAwesomeIcon icon={ele.icon} />
                                            {/* <img src={ele.icon} alt="Background" className='service-item-icon' /> */}
                                            <div>{ele.title}</div>
                                        </span>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {/* ********************************************************************** HOME ********************************************************************** */}
            </div>


        </div>
    )
}

export default Home