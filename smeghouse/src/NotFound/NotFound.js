import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => (
  <main>
    <div className="notfound">
      <h2>Error 404</h2>
      <h3>page not found</h3>
      <p className="notfound__message">
        Кто-то потерялся: или вы, или мы
      </p>
      <p className=" notfound__link">
        Вернуться на <Link to="/" title=" ссылка для перехода">" Главную"</Link>
      </p>
    </div>
  </main>
);
