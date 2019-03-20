import React from 'react';
import { Link } from 'react-router-dom';

import { getRandomString } from '../../utils';

export default () => (
  <header className="mb-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Newspaper</Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/article/test" className="nav-item nav-link">
            Premium article (default itemID)
          </Link>
          <Link to={`/article/${getRandomString()}`} className="nav-item nav-link">
            Premium article (random itemID)
          </Link>
        </div>
      </div>
    </nav>
  </header>
);
