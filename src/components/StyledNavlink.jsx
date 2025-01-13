import { NavLink, Link } from "react-router";

export default function styledNavLink({children}) {
  return (  
    <NavLink  style={({ isActive }) => {
    return isActive ? { color: "plum" } : {};
    }}>
      {children}
    </NavLink>
  );
}