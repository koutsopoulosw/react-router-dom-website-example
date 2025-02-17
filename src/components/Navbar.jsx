import coffeeIcon from '../assets/coffeeIcon.png'
import StyledNavlink from './StyledNavlink';
import './Navbar.css'; 
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='icon' src={coffeeIcon}/>
        Team Barista Games
      </div>
      <div className='navbar-center'>
        <StyledNavlink
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "tan" } : {color: "tan"};
            }}           
        >
          Home
        </StyledNavlink>
        <StyledNavlink
          to="/aboutus"
        >
          About Us
        </StyledNavlink>
      </div>
      <div className='navbar-right'>
        <a url="google.com">Play Now</a>
      </div>
    </div>
  )
}