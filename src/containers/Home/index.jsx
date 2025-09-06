import { useRef, useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { faGithub, faLinkedin, faConnectdevelop, faPhoenixFramework, faCloudflare, faHtml5, faReact, faNodeJs, faPython, faCss3Alt, faJava } from '@fortawesome/free-brands-svg-icons';
import { faPersonWalking, faUsers, faFeather, faChalkboard, faDoorOpen, faExplosion, faDatabase, faScroll, faArrowRight, faDownload, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Nav from "./../../components/Nav/index"
import Card from '../../components/cards/index';
import ContactUS from '../../components/contactUS/index';
import homeBG from "../../assets/slider-bg.jpg"
import profile from "../../assets/profile5.png"

import myServiceImage from "../../assets/serive_back2.gif"
import aboutMe from "../../assets/aboutme.png"

import cv from "../../assets/Shubham_Patil Resume.pdf"

import "../Home/home.css"

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const servicesRef = useRef(null);
    const contactUsRef = useRef(null);

    const socialMedia = [
        { "Name": "Github", "icon": faGithub, "url": "https://github.com/Shubham-S-Patil37" },
        { "Name": "Linkedin", "icon": faLinkedin, "url": "https://www.linkedin.com/in/shubham37" },
    ]

    const homeIntoCard = [
        {
            "icon": faConnectdevelop,
            "title": "Full Stack Development",
            "description": "Comprehensive end-to-end development expertise spanning frontend interfaces, backend systems, and database architecture with modern technology stacks."
        },
        {
            "icon": faPhoenixFramework,
            "title": "System Architecture",
            "description": "Strategic planning and implementation of scalable, maintainable software architectures that drive business growth and operational efficiency."
        },
        {
            "icon": faPersonWalking,
            "title": "Agile Development",
            "description": "Rapid iteration and deployment using modern development methodologies, ensuring quick time-to-market while maintaining code quality standards."
        },
        {
            "icon": faChessQueen,
            "title": "Technical Leadership",
            "description": "Guiding development teams through complex technical challenges while establishing best practices and maintaining high-quality deliverables."
        },
    ]


    const myServiceInfo = [
        { "icon": faFeather, "title": "UI/UX Design", "subtitle": "Crafting intuitive user experiences" },
        { "icon": faChalkboard, "title": "Web Development", "subtitle": "Modern, responsive applications" },
        { "icon": faCloudflare, "title": "API Integration", "subtitle": "Seamless third-party connections" },
        { "icon": faUsers, "title": "User Research", "subtitle": "Data-driven design decisions" },
        { "icon": faDoorOpen, "title": "Microservices", "subtitle": "Scalable architecture solutions" },
        { "icon": faExplosion, "title": "Performance", "subtitle": "Optimized loading & efficiency" },
    ]

    const skillSet = [
        { "Name": "React JS", "Completed": "85", "icon": faReact, "exp": 3, "color": "#61DAFB" },
        { "Name": "Node JS", "Completed": "80", "icon": faNodeJs, "exp": 3, "color": "#68A063" },
        { "Name": "Python", "Completed": "75", "icon": faPython, "exp": 2, "color": "#3776AB" },
        { "Name": "Express JS", "Completed": "85", "icon": faScroll, "exp": 3, "color": "#000000" },
        { "Name": "Nest JS", "Completed": "70", "icon": faScroll, "exp": 2, "color": "#E0234E" },
        { "Name": "MongoDB", "Completed": "80", "icon": faDatabase, "exp": 3, "color": "#47A248" },
        { "Name": "Java", "Completed": "65", "icon": faJava, "exp": 1, "color": "#ED8B00" },
        { "Name": "HTML5", "Completed": "95", "icon": faHtml5, "exp": 4, "color": "#E34F26" },
        { "Name": "CSS3", "Completed": "85", "icon": faCss3Alt, "exp": 3, "color": "#1572B6" },
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
        <div className="portfolio-container">
            <Nav onClickMenu={onClickMenu} />

            {/* ********************************************************************** HERO SECTION ********************************************************************** */}
            <section className='hero-section' ref={homeRef}>
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                    <img src={homeBG} alt="Background" className='hero-bg-image' />
                </div>

                <div className='hero-content'>
                    <div className="hero-grid">
                        <div className='hero-text'>
                            <div className="hero-badge">
                                <span className="badge-text">Available for freelance</span>
                            </div>

                            <h1 className='hero-greeting'>
                                Hello, I'm <span className="hero-name">Shubham Patil</span>
                            </h1>

                            <div className='hero-role'>
                                <span className="role-prefix">A passionate </span>
                                <span className="role-typewriter">
                                    <Typewriter
                                        options={{
                                            strings: ['Full Stack Developer', 'Software Engineer', 'Problem Solver'],
                                            autoStart: true,
                                            loop: true,
                                            delay: 75,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                </span>
                            </div>

                            <p className="hero-description">
                                Crafting digital experiences with modern technologies.
                                Specialized in building scalable web applications that drive business growth.
                            </p>

                            <div className='hero-actions'>
                                <div className='hero-social'>
                                    {socialMedia.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='social-link'
                                            aria-label={social.Name}
                                        >
                                            <FontAwesomeIcon icon={social.icon} />
                                        </a>
                                    ))}
                                </div>

                                <div className="hero-buttons">
                                    <a href={cv} download="Shubham_Patil_Resume.pdf" className='btn-primary'>
                                        <FontAwesomeIcon icon={faDownload} />
                                        Download Resume
                                    </a>
                                    <button
                                        className='btn-secondary'
                                        onClick={() => contactUsRef.current.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Let's Talk
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='hero-image'>
                            <div className="profile-container">
                                <div className="profile-decoration"></div>
                                <img src={profile} alt="Shubham Patil" className='profile-image' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expertise Cards */}
                <div className='expertise-section'>
                    <div className="expertise-grid">
                        {homeIntoCard.map((card, index) => (
                            <div key={index} className='expertise-card'>
                                <div className="card-icon">
                                    <FontAwesomeIcon icon={card.icon} />
                                </div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ********************************************************************** ABOUT SECTION ********************************************************************** */}
            <section className='about-section' ref={aboutRef}>
                <div className='section-container'>
                    <div className="about-grid">
                        <div className='about-content'>
                            <div className="section-header">
                                <span className="section-badge">About Me</span>
                                <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
                            </div>

                            <div className="about-description">
                                <p>
                                    I'm a passionate Full Stack Developer with expertise in creating robust,
                                    scalable web applications. My journey in software development has equipped
                                    me with a comprehensive understanding of both frontend and backend technologies.
                                </p>
                                <p>
                                    I specialize in modern JavaScript frameworks, API development, and database
                                    management, with a strong focus on delivering exceptional user experiences
                                    and maintainable code architecture.
                                </p>
                            </div>

                            <div className='about-details'>
                                <div className="details-grid">
                                    <div className="detail-item">
                                        <span className="detail-label">Name:</span>
                                        <span className="detail-value">Shubham S Patil</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Age:</span>
                                        <span className="detail-value">26 Years</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Role:</span>
                                        <span className="detail-value">Full Stack Developer</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Education:</span>
                                        <span className="detail-value">B.Tech</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </span>
                                        <span className="detail-value">+91 996 026 2933</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <span className="detail-value">patilshubham373737@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">25+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </div>

                        <div className='about-image'>
                            <div className="about-image-container">
                                <img src={aboutMe} alt="About Me" className='about-profile' />
                                <div className="image-decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ********************************************************************** SERVICES SECTION ********************************************************************** */}
            <section className='services-overview' ref={servicesRef}>
                <div className="services-background">
                    <img src={myServiceImage} alt="Services Background" className="services-bg-image" />
                    <div className="services-overlay"></div>
                </div>

                <div className="section-container">
                    <div className="services-grid">
                        <div className="services-content">
                            <div className="section-header">
                                <span className="section-badge light">Services</span>
                                <h2 className="section-title light">Comprehensive Digital Solutions</h2>
                            </div>

                            <p className="services-description">
                                I deliver end-to-end digital solutions that combine technical expertise
                                with creative problem-solving. From concept to deployment, I ensure
                                every project meets the highest standards of quality and performance.
                            </p>

                            <div className='services-grid-items'>
                                {myServiceInfo.map((service, index) => (
                                    <div key={index} className='service-item'>
                                        <div className="service-icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        <div className="service-content">
                                            <h4 className="service-title">{service.title}</h4>
                                            <p className="service-subtitle">{service.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ********************************************************************** SKILLS SECTION ********************************************************************** */}
            <section className='skills-section'>
                <div className="section-container">
                    <div className="section-header centered">
                        <span className="section-badge">Technical Skills</span>
                        <h2 className="section-title">Technologies I Work With</h2>
                        <p className="section-description">
                            A comprehensive toolkit of modern technologies and frameworks
                            that enable me to build robust, scalable applications.
                        </p>
                    </div>

                    <div className='skills-grid'>
                        {skillSet.map((skill, index) => (
                            <div key={index} className='skill-card'>
                                <Card
                                    title={skill.Name}
                                    completed={skill.Completed}
                                    icon={skill.icon}
                                    exp={skill.exp}
                                    color={skill.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ********************************************************************** CONTACT SECTION ********************************************************************** */}
            <div ref={contactUsRef}>
                <ContactUS />
            </div>
        </div>
    )
}

export default Home