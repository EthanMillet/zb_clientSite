import { Link } from 'react-router-dom';

import React, { useState } from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const Sidebar = () => {

  return (
    <div className='nav'>

      <div className='side-bar'>
        <Link className='button' to='/'>
          <span>HOME</span>
        </Link>
        <Link className='button' to='/profile'>
          <span>PROFILE</span>
        </Link>
        <Link className='button' to='/create'>
          <span>CREATE</span>
        </Link>
      </div>

      <header className='header'>
        <div className='header'>
          <input className='search' placeholder='Find outfits...'></input>
        </div>
      </header>

    </div>
  )
}

export default Sidebar;