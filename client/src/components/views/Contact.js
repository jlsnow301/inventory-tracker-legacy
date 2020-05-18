import React, { Component } from "react";
import styled from "@emotion/styled";
import { Nav, NavItem, Button } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-content">
          <h1>We'd love to hear from you </h1>
          <br></br>

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
    );
  }
}

export default Contact;
