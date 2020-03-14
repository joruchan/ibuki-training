import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.scss';

import NavLink from '../../atoms/NavLink/NavLink';
import NavToggle from '../../atoms/NavLink/NavToggle';


function NavBar() {
  const { t } = useTranslation('translations');
  const links = ['About', 'Coaching', 'Register', 'Contact'];

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <a href="/" title="Back to home">
        <img src="/images/LogoIbukiWhite2.svg" alt="Ibuki Training's logo" />
      </a>
      <div className={`nav-links ${toggle ? 'open' : ''}`}>{links.map((link, i) => <NavLink link={`/${link.toLowerCase()}`} title={t(link)} key={i}/>)}</div>
      <NavToggle clickToggle={toggleNav} toggled={toggle} />
    </nav>
  );
}


export default NavBar;
