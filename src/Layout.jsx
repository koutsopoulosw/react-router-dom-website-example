import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from "react-router";
import bgImage from './assets/cup-of-latte-on-orange-background-free-photo.jpg'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout-main' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}