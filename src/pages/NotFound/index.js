import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Page Not Found - 404</h1>
    <Link to="/">Go To Home Page</Link>
  </div>
);

export default NotFound;
