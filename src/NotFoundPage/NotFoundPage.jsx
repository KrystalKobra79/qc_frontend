import React from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaSpaceShuttle,
  FaBookOpen,
  FaPencilAlt,
  FaRegStickyNote,
} from "react-icons/fa";
import "./NotFoundPage.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      {/* Floating Background Blobs */}
      <div className="blob blob--one"></div>
      <div className="blob blob--two"></div>
      <div className="blob blob--three"></div>
      <div className="blob blob--four"></div>

      {/* Floating Icons */}
      <FaRocket className="floating-icon icon--rocket" />
      <FaSpaceShuttle className="floating-icon icon--shuttle" />
      <FaBookOpen className="floating-icon icon--book" />
      <FaPencilAlt className="floating-icon icon--pencil" />
      <FaRegStickyNote className="floating-icon icon--note" />

      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="not-found__button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
