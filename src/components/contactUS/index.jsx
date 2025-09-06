import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import contact_us from "../../assets/contact-us.jpeg"
import apiService from "./../../services/apiService";

import "./contactus.css"

const ContactUS = () => {

    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [msg, setMsg] = useState("");
    const [mbNo, setMbNo] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        debugger

        setName("")
        setEmailAddress("")
        setMsg("")
        setMbNo("")

        setName("")
        setEmailAddress("")
        setMsg("")
        setMbNo("")
        const siteUrl = "https://sp37.vercel.app/"

        const message = `🌟 *Hi ,* 🌟\n\n📌 *Contact Details:*\n👤 *Name:* ${name}\n✉️ *Email:* ${emailAddress}\n📞 *Contact:* ${mbNo}\n\n📝 *Message:*\n ${msg}\n\n🔗 Visit me: ${siteUrl}`;

        const phone = "+919960262933";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    }

    const onMobileNumberChange = (event) => {
        const value = event.target.value
        if (!isNaN(Number(value)))
            setMbNo(value)
    }

    return (
        <div className='contact-us-parent'>
            <div className="contact-container">
                <div className="contact-grid">
                    <div className='section-1'>
                        <div className="contact-info">
                            <h2>Let's Work Together</h2>
                            <p>
                                Ready to bring your ideas to life? I'm always excited to work on
                                new projects and collaborate with amazing people. Let's create
                                something extraordinary together.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <span>Mumbai, Maharashtra, India</span>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <span>+91 996 026 2933</span>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <span>patilshubham373737@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='section-2'>
                        <div className="contact-form">
                            <form onSubmit={onSubmit}>
                                <label className='title-lab'>Send Message</label>
                                <input
                                    className='input-field'
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                <input
                                    className='input-field'
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    required
                                    value={emailAddress}
                                    onChange={(e) => { setEmailAddress(e.target.value) }}
                                />
                                <input
                                    className='input-field'
                                    type="tel"
                                    name="tel"
                                    placeholder="Your Mobile Number"
                                    required
                                    value={mbNo}
                                    onChange={onMobileNumberChange}
                                    maxLength="10"
                                />
                                <textarea
                                    className='input-field input-field-text-area'
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    value={msg}
                                    onChange={(e) => { setMsg(e.target.value) }}
                                ></textarea>
                                <button className='submit-btn' type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS;