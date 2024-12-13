import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Aprende Reposteria</Link>
      <Link to="/add-recipe">Agregar Recetas</Link>
      <Link to="/favorites">Favoritas</Link>
      <Link to="/users">Users</Link>
      <Link to="/register-user">Registrar Usuario</Link>
    </nav>
  );
};

export default Navbar;