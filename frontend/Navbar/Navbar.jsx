import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="nav-links">
        <li><Link to="/">Főoldal</Link></li>
        <li><Link to="/users">Felhasználók</Link></li>
        <li><Link to="/login">Bejelentkezés</Link></li>
        <li><Link to="/register" className="nav-btn">Regisztráció</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;