import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email address is valid
    const isValidEmail = emailRegex.test(email);
    setIsEmailValid(isValidEmail);

    // Check if the message is not empty
    const isValidMessage = message.trim() !== "";
    setIsMessageValid(isValidMessage);

    if (isValidEmail && isValidMessage) {
      // Display confirmation message and ask for confirmation to send the email
      if (window.confirm(`From: ${email}\n\ntext: ${message}\n\nSend this email?`)) {
        // If the user clicks "Yes", clear the inputs and show "message sent" alert
        setEmail("");
        setMessage("");
        setIsMessageSent(true);
        alert("Message sent.");
      }
    }
  };

  return (
    
      <div>
      <h1>Contact Me</h1>
      <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && <span className="error">Please enter a valid email address.</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="15"
            value={message}
            onChange={handleMessageChange}
          />
          {!isMessageValid && <span className="error">Please enter a message.</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isMessageSent && (
        <div>
          <p>Message sent.</p>
        </div>
      )}
    </div></div>
  );
};

export default Contact;