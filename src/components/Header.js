import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <hr />
        <h2>HOUSE FINDER</h2>
        <h3>
          Hey, friend! Our service will help you to find flat/house for rent
        </h3>

        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/favorites">Избранное</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Header;