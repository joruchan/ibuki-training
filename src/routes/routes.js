import React from 'react';
import Homepage from '../pages/Homepage';
import AboutPage from '../pages/AboutPage';
import CoachingPage from '../pages/CoachingPage';
import RegisterPage from '../pages/RegisterPage';
import ContactPage from '../pages/ContactPage';

const routes = {
  '/': () => <Homepage />,
  '/about': () => <AboutPage />,
  '/coaching': () => <CoachingPage />,
  '/register': () => <RegisterPage />,
  '/contact': () => <ContactPage />,
};

export default routes;
