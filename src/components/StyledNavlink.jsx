import { NavLink, Link } from "react-router";
import './StyledNavlink.css';

export default function styledNavLink(props) {
  return (  
    <NavLink className={({ isActive }) => {
      return isActive ? "active-link" : {};
    }}>
      {props.children}
    </NavLink>
  );
}