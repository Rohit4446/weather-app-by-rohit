import React from "react";
import { FcLike } from "react-icons/fc";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="social-panel">
        <p>
          Created with <FcLike /> by <span>Rohit Bahuguna</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
