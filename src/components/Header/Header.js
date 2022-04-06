import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink className="NavLink" exact to="/">
        Home
      </NavLink>
      <NavLink className="NavLink" exact to="familyData">
        Family Data
      </NavLink>
      <NavLink className="NavLink" exact to="favoriteFoods">
        Favorite Foods
      </NavLink>
      <NavLink className="NavLink" exact to="favoriteDogs">
        Favorite Dogs
      </NavLink>
    </div>
  );
}
