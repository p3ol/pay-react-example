import React from 'react';
import { Link } from 'react-router-dom';

import { getRandomString } from '../utils';
import Header from './fragments/Header';

export default () => (
  <div className="page home">
    <div className="container">
      <Header />
      <h1>Home</h1>
      <p>
        This is a normal page, without any paywall, with links to different
        article types
      </p>
      <ul>
        <li><Link to="/article/test">Premium article with default itemID</Link></li>
        <li><Link to={`/article/${getRandomString()}`}>Premium article with randomly generated itemID</Link></li>
      </ul>
    </div>
  </div>
);
