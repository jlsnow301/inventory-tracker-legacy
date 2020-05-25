import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="col-6 col-md-6 text-right">
        <h1>turpis nunc eget lorem dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>

      <div className="row align-items-lg-center">
        <div className="col-6 col-md-12 text-center text-md-right">
          <div className="section-heading mb-3">
            <h1>We'd love to hear from you </h1>
          </div>

          <div>
            <label>First Name</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <label>Last Name</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="text" id="fname" name="firstname" />
            <br></br>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
