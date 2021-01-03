import React from "react";
import APIButton from "./components/APIButton";
import {ThemeContext} from "../context/ThemeContext";

function Footer (props) {
const themeContextAPI = React.useContext(ThemeContext);
const {bgColor, textColor, btnColor} = 
themeContextAPI.themeObj;
return (
<div className={[bgColor, textColor, "mb-5"]
.join (" ")}>
 <footer className="sticky">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block my-3 text-muted">
          Copyright © 2021 Elegant Themes 
          </small>
           
        </div>
        <div className="col-4 col-md mx-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-info" href="#">
              Lorem ipsum
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
              Lorem ipsum
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
               Lorem ipsum
              </a>
            </li>
            
                      
          </ul>
        </div>
        <div className="col-4 col-md">
          <h5>Resourses</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-info" href="#">
              Lorem ipsum
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
               Lorem ipsum
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Lorem ipsum
              </a>
            </li>
           
          </ul>
        </div>
        
      </div>
    </footer>
    </div>
);
}

export default Footer;