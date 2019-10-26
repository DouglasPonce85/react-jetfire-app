import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: '#F75952' };

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" activeStyle={activeStyle} exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default Header;