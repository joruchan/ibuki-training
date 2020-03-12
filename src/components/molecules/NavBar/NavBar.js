import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.scss';

import NavLink from '../../atoms/NavLink/NavLink';
import NavToggle from '../../atoms/NavLink/NavToggle';


function NavBar() {
  const { t, i18n } = useTranslation('translations');
  const links = [t('About'), t('Coaching'), t('Register'), t('Contact')];

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <a href="/" title="Back to home">
        <img src="/images/LogoIbukiWhite2.svg" alt="Ibuki Training's logo" />
        <div id="animation_container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.00)', width: '459px', height: '464px' }}>
          <canvas id="canvas" width="459" height="464" style={{ position: 'absolute', display: 'block', backgroundColor: 'rgba(255, 255, 255, 0.00)' }} />
          <div
            id="dom_overlay_container"
            style={{
              pointerEvents: 'none', overflow: 'hidden', width: '459px', height: '464px', position: 'absolute', left: '0px', top: '0px', display: 'block',
            }}
          />
        </div>
      </a>
      <div className={`nav-links ${toggle ? 'open' : ''}`}>{links.map((link) => <NavLink link={`/${link.toLowerCase()}`} title={link} />)}</div>
      <NavToggle clickToggle={toggleNav} toggled={toggle} />
    </nav>
  );
}


export default NavBar;
