import { useState } from 'react'

import contact_us from "../../assets/contact-us.jpeg"

import "./contactus.css"

const ContactUS = () => {

    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [msg, setMsg] = useState("");
    const [mbNo, setMbNo] = useState("");

    const onSubmit = () => {
        alert("Form submitted successfully   " + name + emailAddress + msg);
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
                    <input className='input-field' type="mobile_number" name="mobile_number" placeholder="Mobile Number" required value={mbNo} onChange={onMobileNumberChange} maxLength="10" /><br />
                    <textarea className='input-field input-field-text-area' name="message" placeholder="Message" required value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea><br />
                    <button className='submit-btn' type="submit" value="Submit" > Send Message </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUS;