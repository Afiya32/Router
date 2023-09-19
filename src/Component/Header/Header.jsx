
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div>
      <h2 className="text-red-400">NavBar</h2>
      <nav className="flex gap-9">
      <button><Link to="./">Home</Link></button>
      <button><Link to="./contact">Contact</Link></button>
      <button><Link to="./about">About</Link></button>
      <button><Link to="./users">User</Link></button>
     
      </nav>
     
      
    </div>
  );
};

export default Header;