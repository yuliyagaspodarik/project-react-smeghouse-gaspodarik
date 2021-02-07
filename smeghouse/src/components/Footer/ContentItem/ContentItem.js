import React from "react";
import { Link } from "react-router-dom";

function ContentItem({ section }) {
  return (
    <div className="footer__info-item">
      <h5>{section.title}</h5>
      <ul>
        {section.content.map((part) => (
          <li key={`${section.id}-${part.text}`}>
            <Link to={part.url} rel="noopener noreferrer" title="Перейти в раздел">
              <img src={part.src} alt={part.name}/><span>{part.name} {part.text}</span>
            </Link>
          </li>))}
      </ul>
    </div>
  );
}

export default ContentItem;
