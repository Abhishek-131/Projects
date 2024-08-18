import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Tomato is your one-stop solution for all your culinary cravings. Whether you're in the mood for a quick snack, a hearty meal, or a gourmet feast, FoodHub connects you with the best local restaurants and eateries.</p>
                <button> <a href="#explore-menu">View Menu</a>
               
                    </button>
            </div>
        </div>
    )
}

export default Header
