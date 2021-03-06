import React from 'react'

import "./contact-form.css"

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h3 className="contact-form-title">Contact Me</h3>
            <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="form-control"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="form-control"
                    />
                    <textarea 
                        name="message" 
                        rows="10" 
                        placeholder="Message..." 
                        className="form-control form-text"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="submit-btn"
                >
                    send
                </button>
            </form>
        </div>
    )
}

export default ContactForm
