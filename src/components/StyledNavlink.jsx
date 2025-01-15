import { NavLink, Link } from "react-router";

export default function styledNavLink(props) {
  return (  
    <NavLink className={({ isActive }) => {
      return isActive ? "active-link" : {};
    }}>
      {props.children}
    </NavLink>
  );
}