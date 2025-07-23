import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      fullname: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-3xl border border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-dark dark:text-light mb-3">Email</h3>
          <p className="text-light-text dark:text-dark-text mb-2">rajeev04632@gmail.com</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-8 rounded-3xl border border-blue-500/20 text-center group hover:border-blue-500/40 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-dark dark:text-light mb-3">Phone</h3>
          <p className="text-light-text dark:text-dark-text mb-2">+91 8521982915</p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-8 rounded-3xl border border-green-500/20 text-center group hover:border-green-500/40 transition-all duration-300">
          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-all duration-300">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-dark dark:text-light mb-3">Location</h3>
          <p className="text-light-text dark:text-dark-text mb-2">Faridabad, Haryana</p>
          <p className="text-light-text dark:text-dark-text">India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-light-surface dark:bg-dark-surface rounded-3xl border border-light-secondary dark:border-dark-secondary p-8">
        <h2 className="text-2xl font-semibold text-dark dark:text-light mb-8">Send me a message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-dark dark:text-light mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-light-bg dark:bg-dark-bg border border-light-secondary dark:border-dark-secondary rounded-2xl text-dark dark:text-light placeholder-light-text dark:placeholder-dark-text focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark dark:text-light mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-light-bg dark:bg-dark-bg border border-light-secondary dark:border-dark-secondary rounded-2xl text-dark dark:text-light placeholder-light-text dark:placeholder-dark-text focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your email address"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark dark:text-light mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-4 bg-light-bg dark:bg-dark-bg border border-light-secondary dark:border-dark-secondary rounded-2xl text-dark dark:text-light placeholder-light-text dark:placeholder-dark-text focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Write your message here..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full md:w-auto bg-primary text-dark px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Send Message</span>
            <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
