import React, { useState } from 'react';
import './NavBar.scss';

import NavLink from '../../atoms/NavLink/NavLink';
import NavToggle from '../../atoms/NavLink/NavToggle';


function NavBar() {
  const links = ['About', 'Coaching', 'Register', 'Contact'];

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src="/images/LogoIbukiWhite.svg" alt="Ibuki Training's logo" />
      <div className={`nav-links ${toggle ? 'open' : ''}`}>{links.map((link) => <NavLink link={`/${link.toLowerCase()}`} title={link} />)}</div>
      <NavToggle clickToggle={toggleNav} toggled={toggle} />
    </nav>
  );
}


export default NavBar;
