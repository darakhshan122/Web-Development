// import React from 'react'
// import { Link } from 'react-router-dom';

// function navbar() {
//   return (
//     <>
    
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         {/* <Link className="nav-Link active" aria-current="page" to="#">Home</Link> */}
//         <Link className="nav-Link" to="/" style={{color:'red'}}><b> home</b></Link>
//         <Link className="nav-Link" to="/about">about</Link>
//         {/* <Link className="nav-Link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link> */}
//       </div>
//     </div>
//   </div>
// </nav>
//      </>
//   )
// }

// export default navbar



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/" style={{ color: 'black', fontWeight: 'bold' }}>Navbar</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav my-11 ">
//             <Link className="nav-link" to="/" style={{ color: 'blue', fontWeight: 'bold' }}>Home</Link>
//             <Link className="nav-link" to="/about" style={{ color: 'blue', fontWeight: 'bold' }}>About</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
   


import React from 'react';
import { Link } from 'react-router-dom';//this should be import when we are working with react router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* every a tag should be replaced with link under this add to="/" */}
        <Link className="navbar-brand" to="/" style={{ color: 'black', fontWeight: 'bold' }}>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'blue', fontWeight: 'bold' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'blue', fontWeight: 'bold' }}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
