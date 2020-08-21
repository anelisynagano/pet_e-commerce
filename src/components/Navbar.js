import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ price }) => {
    return (
        <div className='navbar'>
            <div>
                <ul>
                    <li><Link to='/'><img src='https://res.cloudinary.com/dw4g9x8wv/image/upload/v1597950293/Screenshot_from_2020-08-20_20-03-00_qnrngz.png' /></Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>
            <div>
                <p>Total: {price} EUR</p>
            </div>
        </div>
    )
}

export default Navbar;