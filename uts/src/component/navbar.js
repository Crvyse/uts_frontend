import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const navbar = () => {
    const navList = [
        {title: "Home", path: "/"},
        {title: "Tentang", path: "/Tentang"},
    ];
return (
    <div>
      <nav>
        <ul className="navbar__list">   
          {navList.map((item, index) => {
            return (
              <li key={index} className="navbar__item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )
}

export default navbar