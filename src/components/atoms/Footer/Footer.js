import React, { useState, useEffect } from 'react';
import './Footer.scss';

function Footer() {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  useEffect(() => {
    localStorage.setItem('i18nextLng', language);
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <footer>
      <p>Copyright &copy; 2020 IBUKI TRAINING - All rights reserved</p>
      <select
        id="language"
        onChange={(e) => {
          setLanguage(e.target.value);
          window.location.reload();
          window.scrollTo(0, 0);
        }}
      >
        <option value="fr" selected={language === 'fr' ? 'selected' : false}>FR</option>
        <option value="en" selected={language === 'en' ? 'selected' : false}>EN</option>
        <option value="ja" selected={language === 'ja' ? 'selected' : false}>JP</option>
      </select>

    </footer>
  );
}


export default Footer;
