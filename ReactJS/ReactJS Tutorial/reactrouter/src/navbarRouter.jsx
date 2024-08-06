// import { BrowserRouter as Router, Switch,Link,Route,Routes } from 'react-router-dom'
// import Navbar from './navbar'; // Ensure this file exists
// import Home from './home'; // Ensure this file exists
// import About from './about'; // Ensure this file exists

// const NavbarRouter = () => {
//   return (
  
//    <Router>
//       <Navbar />
//       <div className="container mt-4">
//       <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
         
          
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
       
//   );
// };

// export default NavbarRouter;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import Navbar from './navbar'; // Ensure this file exists
import Home from './home'; // Ensure this file exists
import About from './about'; // Ensure this file exists

const NavbarRouter = () => {
  return (
    <Router> {/*all things should be wrap under router  */}
      <Navbar />
      <div className="container mt-4">
        <Routes> {/* under routes all links like home about should bedeclare under route */}
          <Route path="/about" element={<About />} /> {/*  Route is used here */}
          <Route path="/" element={<Home />} /> {/*  Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default NavbarRouter;

