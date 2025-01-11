import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Layout from './Layout.jsx'
import Home from "./Home.jsx"
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark-theme')

  return (
    <div className={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

function AuthLayout() {
  return (<div>
    <Outlet />
  </div>)
}

function AboutUs() {
  return (<div></div>)
}

function Login() {
  return (<div></div>)
}
function Register() {
  return (<div></div>)
}

export default App
