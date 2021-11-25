import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  //   FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import CustomButtons from "../../buttons/CustomButtons";
import "./footerStyles.css";

const Footer = () => {
  //   const [renderBtn, setRenderBtn] = useState(false);

  return (
    <>
      {/* className="content-container"> */}
      <section className="footer">
        <div className="footer-content">
          <div className='footer-social-links'>
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>

          <div className='footer-privacy-links'>
            <ul>
              <li>Privacy</li>
              <hr/>
              <li>Terms of use</li>
            </ul>
          </div>

          <div className='footer-copy'>
            <p>© 2021 Norebase. All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

// href="https://www.facebook.com/Norebasehq-103768125368418"

// href="https://twitter.com/Norebase"

// href="https://www.linkedin.com/company/norebase/about/"

// href="https://instagram.com/norebase_hq?utm_medium=copy_link"

// href="https://norebase.com/privacy"

// href="https://norebase.com/terms-of-use"
