import React from "react";

import ContentItem from "./ContentItem/ContentItem";
import "./Footer.css";

function Footer({ contacts }) {
  return (
    <footer>
      <div className="footer">
        <div className="footer__title">
          <span>Smeg</span>house
        </div>
        <div className="footer__info">
          {contacts.map((section) => (<ContentItem key={section.id} section={section}/>))}
        </div>
        <div className="footer__rights">
          &copy; 2020 All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
