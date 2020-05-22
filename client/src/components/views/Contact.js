import React from "react";

const Contact = () => {
  // Styling

  // Returns
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>We'd love to hear from you!</h1>

        <div>
          <label>First Name</label>
          <br />
          <input type="text" id="fname" name="firstname" />
          <br />
          <label>Last Name</label>
          <br />
          <input type="text" id="fname" name="firstname" />
          <br />
          <label>Email</label>
          <br />
          <input type="text" id="fname" name="firstname" />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
