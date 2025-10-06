import { useState } from 'react'
import { useAuth } from './context/AuthContext.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import UserDashboard from './components/UserDashboard/UserDashboard.jsx'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'
import { bootstrap } from './utils/bootstrap.js'

bootstrap();

export default function App() {
  const { user } = useAuth()
  const [route, setRoute] = useState(user ? (user.rol === "admin" ? "admin" : "user") : "login")

  return (
    <>
      {!user && route === "register" && <Register onRoute={setRoute} />}
      {!user && route !== "register" && <Login onRoute={setRoute} />}
      {user && user.rol === "admin" && route === "admin" && <AdminDashboard />}
      {user && user.rol !== "admin" && route !== "admin" && <UserDashboard />}
    </>
  )
}