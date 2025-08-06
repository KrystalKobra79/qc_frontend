import React, { useState, useEffect } from 'react';
import './Enquiry.scss';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Real-time validation logic
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.enquiry.trim()) errors.enquiry = 'Enquiry is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const updatedErrors = validate();
    setFormErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', enquiry: '' });
    setFormErrors({});
  };

  return (
    <div className="enquiry-page">
      {/* SVG BLOBS (STATIC) */}
      <svg className="blob blob-1" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M51.6,-64.2C66.4,-52.5,78.7,-35.6,78.6,-19.3C78.4,-2.9,66,13,54.3,27.1C42.6,41.2,31.5,53.5,17.6,59.9C3.7,66.3,-13,66.8,-28.5,60.5C-44,54.2,-58.3,41,-64.4,24.6C-70.5,8.2,-68.5,-11.5,-59.3,-26.4C-50,-41.3,-33.6,-51.3,-16.3,-60C1.1,-68.7,22.1,-76,39.4,-70.7C56.7,-65.5,71.5,-47.8,51.6,-64.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg className="blob blob-2" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M38.3,-63.2C49.4,-56.2,59.6,-49.4,65.6,-39.3C71.5,-29.2,73.2,-15.9,72.2,-3.4C71.2,9.1,67.5,18.2,63.4,29.3C59.2,40.5,54.5,53.7,45.2,58.2C35.9,62.6,22,58.2,8.1,58.6C-5.8,59.1,-19.7,64.4,-29.1,60.4C-38.6,56.3,-43.5,43,-48.5,31.2C-53.5,19.4,-58.7,9.2,-62.3,-3.4C-66,-15.9,-68.2,-31.7,-60.3,-40.7C-52.4,-49.7,-34.4,-51.8,-20.1,-58.6C-5.7,-65.4,5,-76.9,16.9,-76.3C28.8,-75.6,42.7,-62.3,38.3,-63.2Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* LEFT SECTION */}
      <div className="enquiry-left animated delay-1">
        <h1>Get in Touch</h1>
        <p>Fill out the enquiry form and we’ll get back to you as soon as possible.</p>
      </div>

      {/* RIGHT SECTION - FORM */}
      <div className="enquiry-right animated delay-2">
        <div className="form-wrapper">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-icon">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : formData.name ? 'valid' : ''}
                />
              </div>
              {formErrors.name && <p className="error-message">{formErrors.name}</p>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : formData.email ? 'valid' : ''}
                />
              </div>
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-icon">
                <FaPhone className="icon" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+91 12345 67890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? 'error' : formData.phone ? 'valid' : ''}
                />
              </div>
              {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
            </div>

            {/* ENQUIRY */}
            <div className="form-group">
              <label htmlFor="enquiry">Your Enquiry</label>
              <div className="input-icon">
                <FaCommentDots className="icon" />
                <textarea
                  name="enquiry"
                  id="enquiry"
                  rows="4"
                  placeholder="Type your message here..."
                  value={formData.enquiry}
                  onChange={handleChange}
                  className={formErrors.enquiry ? 'error' : formData.enquiry ? 'valid' : ''}
                ></textarea>
              </div>
              {formErrors.enquiry && <p className="error-message">{formErrors.enquiry}</p>}
            </div>

            {/* SUBMIT */}
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* MODAL */}
      {submitted && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Thank You!</h2>
            <p>We have received your enquiry. We'll be in touch shortly.</p>
            <button className="modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
