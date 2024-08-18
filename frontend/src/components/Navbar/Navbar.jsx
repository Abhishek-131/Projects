// import React, { useContext, useEffect, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../Context/StoreContext'

// const Navbar = ({ setShowLogin }) => {

//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate('/')
//   }

//   return (
//     <div className='navbar'>
//       <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
//       <ul className="navbar-menu">
//         <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
//         <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
//         <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
//         <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <Link to='/cart' className='navbar-search-icon'>
//           <img src={assets.basket_icon} alt="" />
//           <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
//         </Link>
//         {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
//           : <div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="" />
//             <ul className='navbar-profile-dropdown'>
//               <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
//               <hr />
//               <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
//             </ul>
//           </div>
//         }

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = () => {
      // Perform the search action here using the searchQuery state
      console.log('Search query:', searchQuery);
      
      // You can either navigate to a search results page or display the results in a dropdown
      // For example, let's navigate to a search results page and pass the search query as a parameter
      navigate(`/search?query=${searchQuery}`);
  };
  

    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='logo' src={assets.logo} alt='' />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('home')} className={`${menu === 'home' ? 'active' : ''}`}>
                    Home
                </Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={`${menu === 'menu' ? 'active' : ''}`}>
                    Menu
                </a>
                <a href='#app-download' onClick={() => setMenu('mob-app')} className={`${menu === 'mob-app' ? 'active' : ''}`}>
                    Mobile App
                </a>
                <a href='#footer' onClick={() => setMenu('footer')} className={`${menu === 'footer' ? 'active' : ''}`}>
                    Location
                </a>
                <a href='/contact' onClick={() => setMenu('contact')} className={`${menu === 'contact' ? 'active' : ''}`}>
                    Contact Us
                </a>
               
            </ul>
            <div className='navbar-right'>
                <div className='navbar-search'>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleSearchSubmit();
                            }
                        }}
                    />
                    <img src={assets.search_icon} alt='Search' onClick={handleSearchSubmit} className='search-icon' />
                </div>
                <Link to='/cart' className='navbar-search-icon'>
                    <img src={assets.basket_icon} alt='' />
                    <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
                </Link>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt='' />
                        <ul className='navbar-profile-dropdown'>
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt='' />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt='' />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;








