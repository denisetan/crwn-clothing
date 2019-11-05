import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
import { auth } from '../../firebase/firebase.utils';

=======
>>>>>>> 0db5661fa31ddae3f44ac8b57281aada81172a29
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

<<<<<<< HEAD
const Header = ( {currentUser}) => (
=======
const Header = () => (
>>>>>>> 0db5661fa31ddae3f44ac8b57281aada81172a29
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
<<<<<<< HEAD
            {
               currentUser ?
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
               :
               <Link className='option' to='/signin'>SIGN IN</Link>
            }
=======
>>>>>>> 0db5661fa31ddae3f44ac8b57281aada81172a29
        </div>
    </div>
)

export default Header;