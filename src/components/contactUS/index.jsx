import { useState } from 'react'

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
            <div className='section-1'>
                <img src={contact_us} className='section-img' />
            </div>
            <div className='section-2'>
                <form onSubmit={onSubmit}>
                    <label className='title-lab' >Contact Us</label>
                    <input className='input-field' type="text" name="name" placeholder="Name" required value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <input className='input-field' type="email" name="email" placeholder="Email Address" required value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} /><br />
                    <input className='input-field' type="tel" name="tel" placeholder="Mobile Number" required value={mbNo} onChange={onMobileNumberChange} maxLength="10" /><br />
                    <textarea className='input-field input-field-text-area' name="message" placeholder="Message" required value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea><br />
                    <button className='submit-btn' type="submit" value="Submit" > Send Message </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUS;