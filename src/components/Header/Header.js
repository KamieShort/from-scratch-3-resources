import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="familyData">
        Family Data
      </NavLink>
      <NavLink exact to="favoriteFoods">
        Favorite Foods
      </NavLink>
      <NavLink exact to="favoriteDogs">
        Favorite Dogs
      </NavLink>
    </div>
  );
}
