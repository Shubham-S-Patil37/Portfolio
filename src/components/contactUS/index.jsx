import React from 'react'

import contact_us from "../../assets/contact-us.jpeg"

import "./contactus.css"

const ContactUS = () => {
    return (
        <div className='contact-us-parent'>
            <div className='section-1'>
                <img src={contact_us} className='section-img' />
            </div>
            <div className='section-2'>
                <form>
                    <label className='title-lab' >Contact Us</label>
                    <input className='input-field' type="text" name="name" placeholder="Name" required /><br />
                    <input className='input-field' type="email" name="email" placeholder="Email Address" required /><br />
                    <textarea className='input-field' name="message" placeholder="Message" required></textarea><br />
                    <button className='submit-btn' type="submit" value="Submit" > Send Message </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUS;