import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useJwt } from './UserStore'



const Navbar = () => {
  const [isNavbarShowing, setNavbarShowing] = useState(false);
  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing)
  }
  const [location, setLocation] = useLocation();

  const { getJwt, clearJwt } = useJwt();
  const jwt = getJwt();

  const handleLogout = () => {
    clearJwt();
    setLocation('/')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className={`navbar-brand ${location === '/' ? 'active' : ''}`}> E-Shop </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`}> Home </Link>
              </li>
              <li className="nav-item">
                <Link href="/ProductPage" className={`nav-link ${location === '/ProductPage' ? 'active' : ''}`}> Products </Link>
              </li>
              <li className="nav-item">
                <Link href="/ShoppingCart" className={`nav-link ${location === '/ShoppingCart' ? 'active' : ''}`}>Cart</Link>
              </li>
              {jwt ? (
                <>
                <li className="nav-item">
                    <Link href="/profile" className={`nav-link ${location === '/Profile' ? 'active' : ''}`}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="btn btn-link nav-link">Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link href="/RegisterPage" className={`nav-link ${location === '/RegisterPage' ? 'active' : ''}`}>Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/login" className={`nav-link ${location === '/login' ? 'active' : ''}`}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
