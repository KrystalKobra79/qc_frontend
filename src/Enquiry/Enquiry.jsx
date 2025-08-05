import React, { useState, useEffect } from 'react';
import './Enquiry.scss';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';

const Enquiry = ({ theme = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Validate each field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^\d{10}$/.test(value) ? 'Enter a valid 10-digit number' : '';
      case 'enquiry':
        return value.trim() === '' ? 'Please enter your enquiry' : '';
      default:
        return '';
    }
  };

  // Real-time validation
  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (touched[field]) {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', enquiry: '' });
      setTouched({});
    }
  };

  return (
    <div className={`enquiry-page ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="enquiry-left">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Fill out the form and we'll get back to you shortly.</p>
      </div>

      <div className="enquiry-right">
        <div className="form-wrapper">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-icon">
                <span className="icon"><FaUser /></span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : touched.name ? 'valid' : ''}
                />
              </div>
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <span className="icon"><FaEnvelope /></span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : touched.email ? 'valid' : ''}
                />
              </div>
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <div className="input-icon">
                <span className="icon"><FaPhone /></span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : touched.phone ? 'valid' : ''}
                />
              </div>
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            {/* Enquiry Field */}
            <div className="form-group">
              <label htmlFor="enquiry">Enquiry</label>
              <div className="input-icon">
                <span className="icon"><FaCommentDots /></span>
                <textarea
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  rows="4"
                  className={errors.enquiry ? 'error' : touched.enquiry ? 'valid' : ''}
                />
              </div>
              {errors.enquiry && <div className="error-message">{errors.enquiry}</div>}
            </div>

            <button className="submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Thank You!</h2>
            <p>Your enquiry has been submitted.</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
