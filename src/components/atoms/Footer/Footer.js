import React, { useState, useEffect } from 'react';
import './Footer.scss';

function Footer() {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  useEffect(() => {
    localStorage.setItem('i18nextLng', language);
  }, [language]);

  return (
    <footer>
      <p>Copyright &copy; 2020 IBUKI TRAINING - All rights reserved <br /> </p>
      <div><p><a href="/privacy">Privacy Notice</a></p> <select
        id="language"
        onChange={(e) => {
          setLanguage(e.target.value);
          window.location.reload(true);
          window.scrollTo(0,0);
        }}
      >
        <option value="fr" selected={language.includes('fr') ? 'selected' : false}>Français</option>
        <option value="en" selected={language.includes('en') ? 'selected' : false}>English</option>
        <option value="ja" selected={language.includes('ja') ? 'selected' : false}>日本</option>
      </select></div>
      

    </footer>
  );
}


export default Footer;
