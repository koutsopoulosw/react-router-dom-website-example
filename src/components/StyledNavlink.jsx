import { NavLink, Link } from "react-router";

export default styledNavLink = ({children}) => <NavLink  style={({ isActive }) => {
  return isActive ? { color: "plum" } : {};
  }}>
    {children}
  </NavLink>