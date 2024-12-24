import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="text-yellow-50 contact">
      <div>
        <i className="fa-solid fa-phone"></i>
        <p>+20 10 1795 3052</p>
      </div>
      <div>
        <i className="fa-brands fa-whatsapp"></i>
        
        <a href="https://wa.me/201017953052" target="_blank">+20 10 1795 3052</a>
      </div>
      <div>
        <i className="fa-regular fa-envelope"></i>
        <a href="mailto:mohamedashraf7106@gmail.com">mohamedashraf7106@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;
