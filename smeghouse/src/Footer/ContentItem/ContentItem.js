import React from "react";
import { Link } from "react-router-dom";

export const ContentItem = ({ section }) => (
  <div className="footer__info-item">
    <h5>{section.title}</h5>
    <ul>
      {section.content.map((part) => (
        <li key={`${section.id}-${part.text}`}>
          <Link to={part.url} rel="noopener noreferrer">
            <img src={part.src} alt={part.name}/><span>{part.name} {part.text}</span>
          </Link>
        </li>))}
    </ul>
  </div>
);
