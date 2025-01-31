import { useRef, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin, faConnectdevelop, faPhoenixFramework, faCloudflare, faHtml5, faReact, faNodeJs, faPython, faCss3Alt, faJava } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalking, faUsers, faFeather, faChalkboard, faDoorOpen, faExplosion, faDatabase, faScroll } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Nav from "./../../components/Nav/index"
import Card from '../../components/cards/index';
import ContactUS from '../../components/contactUS/index';
import homeBG from "../../assets/slider-bg.jpg"
import profile from "../../assets/profile5.png"

import myServiceImage from "../../assets/serive_back1.png"
import aboutMe from "../../assets/aboutme.png"

import cv from "../../assets/Shubham_Patil Resume.pdf"

import "../Home/home.css"

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const servicesRef = useRef(null);
    const contactUsRef = useRef(null);

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

    const skillSet = [
        { "Name": "React JS", "Completed": "70", "icon": faReact, "exp": 2 },
        { "Name": "Node JS", "Completed": "80", "icon": faNodeJs, "exp": 3 },
        { "Name": "Python", "Completed": "80", "icon": faPython, "exp": 3 },
        { "Name": "Express JS", "Completed": "70", "icon": faScroll, "exp": 2 },
        { "Name": "Nest JS", "Completed": "70", "icon": faScroll, "exp": 2 },
        { "Name": "Mongo DB", "Completed": "70", "icon": faDatabase, "exp": 2 },
        { "Name": "JAVA", "Completed": "70", "icon": faJava, "exp": 1 },
        { "Name": "HTML", "Completed": "90", "icon": faHtml5, "exp": 2 },
        { "Name": "CSS", "Completed": "40", "icon": faCss3Alt, "exp": 2 },
    ]

    const onClickSocialMediaIcon = (url) => { window.open(url, "_blank"); }

    const onClickDownloadCV = () => { window.open(url, "_blank"); }

    const onClickMenu = (menuName) => {
        if (menuName == "Home")
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        else if (menuName == "About")
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        else if (menuName == "Work")
            workRef.current.scrollIntoView({ behavior: 'smooth' });
        else if (menuName == "Service")
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        else if (menuName == "Contact")
            contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <Nav onClickMenu={onClickMenu} />
            {/* ********************************************************************** HOME ********************************************************************** */}
            <div className='home-parent' ref={homeRef}>
                <div className="img-wrapper">
                    <img src={homeBG} alt="Background" className='home-back-img' />
                </div>
                <div className='home-container'>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                            <img src={profile} alt="Background" className='home-profile' />
                        </div>
                    </div>
                </div>

                <div className='service-parent'>
                    <div className='service-section-1'>
                        <img src={myServiceImage} style={{ height: "100%", width: '85%' }} />
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
            {/* ********************************************************************** ABOUT ME ********************************************************************** */}

            <div className='about-me-parent' ref={aboutRef}>
                <div className='about-container'>
                    <div className='about-me-section-1'>
                        <div className='about-me-title'>ABOUT ME</div>
                        <div className='about-me-title2'>I Develop System that Works</div>
                        <div className="about-me-description">
                            Creative Fullstack Developer with a robust proficiency in API-driven design encompassing Frontend, Backend, and REST API
                            development. Specializes in various databases, including MongoDB, with expertise in Microservices and MVC Architecture.
                            Demonstrates excellence in managing the seamless interchange of data between servers and users.
                        </div>

                        <div className='about-me-user-info'>
                            <ul className='about-me-user-info-container'>
                                <li className='about-me-user-info-key'>
                                    <p>Name</p>
                                    <p>AGE</p>
                                    <p>Designation</p>
                                </li>
                                <li>
                                    <p>Shubham S Patil</p>
                                    <p>26 Years</p>
                                    <p>Software Developer</p>
                                </li>
                            </ul>

                            <ul className='about-me-user-info-container'>
                                <li className='about-me-user-info-key'>
                                    <p>Phone</p>
                                    <p>Email</p>
                                    <p>Course</p>
                                </li>
                                <li>
                                    <p>+91 996 026 2933</p>
                                    <p>patilshubham373737@gmail.com</p>
                                    <p>B. Tech</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-me-section-2'>
                        <img src={aboutMe} className='about-me-image' />
                    </div>
                </div>
            </div>
            {/* ********************************************************************** Services ********************************************************************** */}
            <div ref={servicesRef} className='services-parent'>
                <h1 className='services_heading'>What I Bring to the Table</h1>
                <div className='cards-parent-container'>
                    {
                        skillSet.map((ele) =>
                            <div className='services-card-parent'>
                                <Card title={ele.Name} completed={ele.Completed} icon={ele.icon} exp={ele.exp} />
                            </div>
                        )
                    }
                </div>
            </div>

            {/* ********************************************************************** Contact US ********************************************************************** */}
            <div ref={contactUsRef}>
                <ContactUS />
            </div>
        </div>
    )
}

export default Home