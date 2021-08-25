import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/static-page.css";
import ModButton from "../elements/button";

const Contact: React.FC = () => {
  return (
    <div className="static-main">
      <div className="static-intro">
        <h1>contact</h1>
      </div>
      <div className="static-box">
        <div className="static-services">
          <div className="static-serviceTitle">Anthony</div>
          Software Dev
          <div>
            <ModButton href="https://github.com/AnthonySDi">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fab", "github"]}
              />
            </ModButton>
            <ModButton href="mailto:anthonyrsdig@gmail.com">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fas", "envelope-open-text"]}
              />
            </ModButton>
          </div>
        </div>

        <div className="static-services">
          <div className="static-serviceTitle">Margarita</div>Software Dev
          <div>
            <ModButton href="https://github.com/MargaritaYatina">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fab", "github"]}
              />
            </ModButton>
            <ModButton href="pearlmargaret2012@gmail.com">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fas", "envelope-open-text"]}
              />
            </ModButton>
          </div>
        </div>

        <div className="static-services">
          <div className="static-serviceTitle">Selena</div>Software Dev
          <div>
            <ModButton href="https://github.com/selinapn">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fab", "github"]}
              />
            </ModButton>
            <ModButton href="selina.pn@outlook.com">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fas", "envelope-open-text"]}
              />
            </ModButton>
          </div>
        </div>

        <div className="static-services">
          <div className="static-serviceTitle">Jeremiah</div>Software Dev
          <div>
            <ModButton href="https://github.com/jlsnow301">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fab", "github"]}
              />
            </ModButton>
            <ModButton href="mailto:jlsnow.301@gmail.com">
              <FontAwesomeIcon
                className="static-contact"
                size="2x"
                style={{ marginRight: -0.5 }}
                icon={["fas", "envelope-open-text"]}
              />
            </ModButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
