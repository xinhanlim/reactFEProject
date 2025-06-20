import {useState} from 'react'

const Navbar = () => {
    const [isNavbarShowing, setNavbarShowing] = useState(false);
    const toggleNavbar = () => {
        setNavbarShowing(!isNavbarShowing)
    }
 return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">E-Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick = {toggleNavbar}
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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
 )
}
export default Navbar;

// export default function Navbar(){
//     const [isNavbarShowing, setNavbarShowing] = useState(false);
//     const toggleNavbar = () => {
//         setNavbarShowing(!isNavbarShowing)
//     }
//     return(
//         <>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <a className="navbar-brand" href="#">E-Shop</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick = {toggleNavbar}
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Products</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//         </>
//     )
// }