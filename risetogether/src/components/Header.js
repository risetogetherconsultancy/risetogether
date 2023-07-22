import React from "react";
import "../styles/Header.css";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Header() {
  return (
    <div className="main-div">
      <div className="profile">Rise Together Consultancy</div>
      <div className="social-media">
        <MailIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}
