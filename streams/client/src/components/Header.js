import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <nav className='ui secondary pointing menu'>
      <Link className='item' to='/'>
        Streamingly
      </Link>
      <div className='right menu'>
        <Link className='item' to='/'>
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </nav>
  );
};

export default Header;
