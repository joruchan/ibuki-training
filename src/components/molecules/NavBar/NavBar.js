import React from 'react';
import './NavBar.scss';

import NavLink from '../../atoms/NavLink/NavLink';


function NavBar() {
  const links = ['About', 'Coaching', 'Register', 'Contact'];
  return (
    <nav>
      <img src="/images/LogoIbukiWhite.svg" alt="Ibuki Training's logo" />
      {links.map((link) => <NavLink link={`/${link.toLowerCase()}`} title={link} />)}
    </nav>
  );
}


export default NavBar;
