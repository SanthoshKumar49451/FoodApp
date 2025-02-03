import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Order Your Favourite Food Here</h2>
            <p>
            Discover fresh, flavorful dishes crafted to satisfy every craving. Order now and enjoy delicious meals delivered straight to your door!
            </p>
            <button>
                ViewMenu
            </button>
        </div>
    </div>
  )
}

export default Header