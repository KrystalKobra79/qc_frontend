import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import "./Enquiry.scss";

const Enquiry = () => {
  // ------------------------
  // State Management
  // ------------------------
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState({ open: false, success: false });

  // ------------------------
  // Validation
  // ------------------------
  const validate = (field, value) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) error = "Name is required";
    }

    if (field === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!value.trim()) error = "Phone is required";
      else if (!phoneRegex.test(value))
        error = "Enter a valid 10-digit phone number";
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = "Email is required";
      else if (!emailRegex.test(value)) error = "Enter a valid email";
    }

    if (field === "enquiry") {
      if (!value.trim()) error = "Enquiry cannot be empty";
    }

    return error;
  };

  // ------------------------
  // Handlers
  // ------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submit
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await axios.post("http://localhost:5000/api/enquiry", formData);
      setModal({ open: true, success: true });
      setFormData({ name: "", phone: "", email: "", enquiry: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      setModal({ open: true, success: false });
    }
  };

  return (
    <div className="enquiry-page">
      {/* Left Section */}
      <div className="enquiry-left">
        <h1>Contact Us</h1>
        <p>
          Got a question, feedback, or need help? Fill out the form and we’ll
          get back to you as soon as possible.
        </p>
      </div>

      {/* Right Section */}
      <div className="enquiry-right">
        <div className="form-wrapper">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* Name */}
            <div className={`form-group ${errors.name ? "error" : "valid"}`}>
              <label htmlFor="name">Name</label>
              <div className="input-icon">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : "valid"}
                />
              </div>
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className={`form-group ${errors.phone ? "error" : "valid"}`}>
              <label htmlFor="phone">Phone</label>
              <div className="input-icon">
                <FaPhone className="icon" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : "valid"}
                />
              </div>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className={`form-group ${errors.email ? "error" : "valid"}`}>
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : "valid"}
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Enquiry */}
            <div
              className={`form-group ${errors.enquiry ? "error" : "valid"}`}
            >
              <label htmlFor="enquiry">Enquiry</label>
              <div className="input-icon">
                <FaCommentDots className="icon" />
                <textarea
                  name="enquiry"
                  id="enquiry"
                  rows="4"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className={errors.enquiry ? "error" : "valid"}
                />
              </div>
              {errors.enquiry && (
                <p className="error-message">{errors.enquiry}</p>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="modal-backdrop">
          <div className="modal">
            {modal.success ? (
              <>
                <h2>Thank You!</h2>
                <p>Your enquiry has been submitted successfully.</p>
              </>
            ) : (
              <>
                <h2>Submission Failed</h2>
                <p>Something went wrong. Please try again later.</p>
              </>
            )}
            <button
              className="modal-btn"
              onClick={() => setModal({ open: false, success: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
