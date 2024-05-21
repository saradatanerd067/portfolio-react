import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="social-media">
          <h3>Connect with me:</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/sara-saeed-a7235a241/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/orangechowderr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
