import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App



// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Sidebar from './components/Sidebar/Sidebar';
// import Add from './pages/Add/Add';
// import List from './pages/List/List';
// import Orders from './pages/Orders/Orders';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import jwt_decode from 'jwt-decode'; // Import jwt_decode to decode JWT token

// const App = () => {
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     // Retrieve JWT token from local storage
//     const token = localStorage.getItem('token');

//     // Decode the JWT token to extract user's name
//     if (token) {
//       const decodedToken = jwt_decode(token);
//       if (decodedToken && decodedToken.name) {
//         setUserName(decodedToken.name);
//       }
//     }
//   }, []);

//   return (
//     <div className='app'>
//       <ToastContainer/>
//       <Navbar userName={userName}/> {/* Pass userName as a prop to Navbar */}
//       <hr />
//       <div className="app-content">
//         <Sidebar/>
//         <Routes>
//           <Route path="/add" element={<Add/>}/>
//           <Route path="/list" element={<List/>}/>
//           <Route path="/orders" element={<Orders/>}/>
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App;
