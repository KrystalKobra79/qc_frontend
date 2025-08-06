import React, { useState, useEffect } from 'react';
import './Enquiry.scss';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const placeHolderData = ['Your Name', 'email@example.org', '+91 9876543201', 'Hello, I would love to study here...']
const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlClass = document.documentElement.className;
    setTheme(htmlClass.includes('dark-mode') ? 'dark' : 'light');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    setFormErrors((prev) => ({
      ...prev,
      [name]: !value.trim() ? 'This field is required' : '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', enquiry: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className={`enquiry-page ${theme}-mode`}>
      <div className="enquiry-left">
        <h1 className="animated fade-up delay-1">Got a question?</h1>
        <p className="animated fade-up delay-2">
          Fill out this form and we’ll get back to you within 24 hours. We’re here to help with anything you need.
        </p>
      </div>

      <div className="enquiry-right">
        <div className="form-wrapper animated fade-up delay-3">
          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            {['name', 'email', 'phone', 'enquiry'].map((field, index) => {
              const Icon = {
                name: FaUser,
                email: FaEnvelope,
                phone: FaPhone,
                enquiry: FaComment,
              }[field];

              const isTextarea = field === 'enquiry';
              const value = formData[field];
              const error = formErrors[field];

              return (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <div className="input-icon">
                    <Icon className="icon" />
                    {isTextarea ? (
                      <textarea
                        name={`${field} *`}
                        id={field}
                        value={value}
                        onChange={handleChange}
                        className={error ? 'error' : value ? 'valid' : ''}
                        
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        id={field}
                        value={value}
                        onChange={handleChange}
                        className={error ? 'error' : value ? 'valid' : ''}
                        placeholder= {placeHolderData[index]}
                      />
                    )}
                  </div>
                  {error && <span className="error-message">{error}</span>}
                </div>
              );
            })}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Thank You!</h2>
            <p>Your enquiry has been received. We’ll be in touch soon.</p>
            <button className="modal-btn" onClick={() => setIsSubmitted(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
