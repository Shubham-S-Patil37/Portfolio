import { useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin, faConnectdevelop, faPhoenixFramework, faCloudflare, faHtml5, faReact, faNodeJs, faPython, faCss3Alt, faJava } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalking, faUsers, faFeather, faChalkboard, faDoorOpen, faExplosion, faDatabase, faScroll } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Nav from "./../../components/Nav/index"
import Card from '../../components/cards/index';
import ContactUS from '../../components/contactUS/index';
import homeBG from "../../assets/slider-bg.jpg"


import myServiceImage from "../../assets/serive_back1.png"


// ********************************************** Shubham **********************************************
import shubhamCV from "../../assets/Shubham_Patil Resume.pdf"
import shubhamProfile from "../../assets/profile5.png"
import shubham_aboutme from "../../assets/shubham_aboutme.png"
// ********************************************** Vinit **********************************************
import vinitCv from "../../assets/vinit_resume.pdf"
import vinitProfile from "../../assets/vinit_profile.jpg"
import vinit_aboutme from "../../assets/vinit_aboutme.jpg"

import "../Home/home.css"

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const servicesRef = useRef(null);
    const contactUsRef = useRef(null);


    const assetPath = "../../assets/"

    const [userDetails, setUserDetails] = useState({})

    const socialMedia = [
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37", "user": "Shubham Patil" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://github.com/Shubham-S-Patil37", "user": "Shubham Patil" },
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Vinit-S-Patil", "user": "Vinit Patil" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://www.linkedin.com/in/vinit-s-patil/", "user": "Vinit Patil" },
    ]

    useEffect(() => {

        const name = import.meta.env.VITE_DEVELOPER_NAME

        const mediaLink = socialMedia.filter(ele => ele.user === name)

        const userObject = {
            name: name ? name : "Shubham Patil",
            resumeFile: name === "Shubham Patil" ? shubhamCV : vinitCv,
            profile: name === "Shubham Patil" ? shubhamProfile : vinitProfile,
            socialMedia: mediaLink ? mediaLink : [],
            contactNumber: import.meta.env.VITE_DEVELOPER_CONTACT_NUMBER,
            email: import.meta.env.VITE_DEVELOPER_EMAIL,
            age: import.meta.env.VITE_DEVELOPER_AGE,
            designation: import.meta.env.VITE_DEVELOPER_DESIGNATION,
            aboutMeImage: name === "Shubham Patil" ? shubham_aboutme : vinit_aboutme,
            skillSet: name === "Shubham Patil" ? shubhamSkillSet : vinitSkillSet
        }

        setUserDetails(userObject)

    }, []);

    console.log("///////////////////////////////////////////////////")
    console.log(userDetails)


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

    const shubhamSkillSet = [
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

    const vinitSkillSet = [
        { "Name": "React JS", "Completed": "70", "icon": faReact, },
        { "Name": "Node JS", "Completed": "80", "icon": faNodeJs, },
        { "Name": "Python", "Completed": "80", "icon": faPython, },
        { "Name": "Express JS", "Completed": "70", "icon": faScroll, },
        { "Name": "Redux", "Completed": "70", "icon": faScroll, },
        { "Name": "Mongo DB", "Completed": "70", "icon": faDatabase, },
        { "Name": "Tailwind CSS", "Completed": "70", "icon": faJava, },
        { "Name": "HTML", "Completed": "90", "icon": faHtml5, },
        { "Name": "CSS", "Completed": "40", "icon": faCss3Alt, },
    ]

    const onClickSocialMediaIcon = (url) => {
        window.open(url, "_blank");
    }

    const onClickDownloadCV = () => {
        window.open(url, "_blank");
    }

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
                                    {/* {Shubham Patil} */}
                                    {userDetails.name}
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
                                    userDetails.socialMedia && userDetails.socialMedia.length > 0 ?
                                        userDetails.socialMedia.map((ele) =>
                                            <FontAwesomeIcon icon={ele.icon} className='social-icon-item' onClick={() => { onClickSocialMediaIcon(ele.url) }} />
                                        )
                                        : <></>
                                }
                            </div>
                            <div >
                                <a href={userDetails.resumeFile} download={`${name}_Resume.pdf`} >
                                    <button className='download-cv' onClick={onClickDownloadCV} >Download CV</button>
                                </a>
                            </div>
                        </div>
                        <div className='home-section-2'>
                            <img src={userDetails.profile} alt="Background" className='home-profile' />
                        </div>
                    </div>
                </div>

                <div className='service-parent'>
                    <div className='service-section-1'>
                        {/* <img src={myServiceImage} style={{ height: "100%", width: '85%' }} /> */}
                        <iframe src="https://assets.pinterest.com/ext/embed.html?id=665055069984128320" height="438" width="450" frameborder="0" scrolling="no" ></iframe>
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
                                    <p>{userDetails.name}</p>
                                    <p>{userDetails.age} Years</p>
                                    <p>{userDetails.designation}</p>
                                </li>
                            </ul>

                            <ul className='about-me-user-info-container'>
                                <li className='about-me-user-info-key'>
                                    <p>Phone</p>
                                    <p>Email</p>
                                    <p>Course</p>
                                </li>
                                <li>
                                    <p>{userDetails.contactNumber}</p>
                                    <p>{userDetails.email}</p>
                                    <p>B. Tech</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-me-section-2'>
                        <img src={userDetails.aboutMeImage} className='about-me-image' />
                    </div>
                </div>
            </div>
            {/* ********************************************************************** Services ********************************************************************** */}
            <div ref={servicesRef} className='services-parent'>
                <h1 className='services_heading'>What I Bring to the Table</h1>
                <div className='cards-parent-container'>
                    {
                        userDetails.skillSet && userDetails.skillSet.length > 0 ?
                            userDetails.skillSet.map((ele) =>
                                <div className='services-card-parent'>
                                    <Card title={ele.Name} completed={ele.Completed} icon={ele.icon} exp={ele.exp} />
                                </div>
                            )
                            : <></>
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