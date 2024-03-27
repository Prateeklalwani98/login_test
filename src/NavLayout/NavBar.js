// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./NavStyle.css";

// function NavBar() {
//   const location = useLocation();
//   const handleLogout = () => {
//     onLogout();
//   };

//   return (
//     <div>
//       <ul id="NavBar">
//         <li className={location.pathname === "/Home" ? "active" : ""}>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li className={location.pathname === "/Inventory" ? "active" : ""}>
//           <Link to="/Inventory">Inventory</Link>
//         </li>
//         <li className={location.pathname === "/Purchase" ? "active" : ""}>
//           <Link to="/Purchase">Purchase</Link>
//         </li>
//         <li className={location.pathname === "/Sell" ? "active" : ""}>
//           <Link to="/Sell">Sell</Link>
//         </li>
//         <li style={{ float: "right" }}>
//           <button onClick={handleLogout}>Logout</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default NavBar;

// --------------
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./NavStyle.css";

// function NavBar({ loggedIn, onLogout }) {
//   const location = useLocation();

//   const handleLogout = () => {
//     onLogout();
//   };

//   return (
//     <div>
//       <ul id="NavBar">
//         <li className={location.pathname === "/home" ? "active" : ""}>
//           <Link to="/home">Home</Link>
//         </li>
//         <li className={location.pathname === "/inventory" ? "active" : ""}>
//           <Link to="/inventory">Inventory</Link>
//         </li>
//         <li className={location.pathname === "/purchase" ? "active" : ""}>
//           <Link to="/purchase">Purchase</Link>
//         </li>
//         <li className={location.pathname === "/sell" ? "active" : ""}>
//           <Link to="/sell">Sell</Link>
//         </li>

//         <li style={{ float: "right" }}>
//           <button onClick={handleLogout}>Logout</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default NavBar;

// NavBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavStyle.css";

function NavBar({ loggedIn, onLogout }) {
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      {loggedIn && (
        <ul id="NavBar">
          <li className={location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </li>
          <li className={location.pathname === "/inventory" ? "active" : ""}>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li className={location.pathname === "/purchase" ? "active" : ""}>
            <Link to="/purchase">Purchase</Link>
          </li>
          <li className={location.pathname === "/sell" ? "active" : ""}>
            <Link to="/sell">Sell</Link>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
