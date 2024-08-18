import React from 'react';
import './ContactUsPage.css';

export default  function  ContactUsPage()  {
    return (
        <div className="contact-page">
            
            <div className="main-content">
                <header className="header">
                    <h1>Contact Us</h1>
                </header>
                <section id="address" className="section">
                    <h2>Address</h2>
                    <p>232001 Manit , Bhopal, India</p>
                </section>
                <section id="phone" className="section">
                    <h2>Phone</h2>
                    <p>+918887779999</p>
                </section>
                <section id="email" className="section">
                    <h2>Email</h2>
                    <p>tomato@example.com</p>
                </section>
            </div>
        </div>
    );
};


