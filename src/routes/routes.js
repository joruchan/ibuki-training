import React from 'react';
import Homepage from '../pages/Homepage';
import AboutPage from '../pages/AboutPage';
import CoachingPage from '../pages/CoachingPage';
import RegisterPage from '../pages/RegisterPage';
import ContactPage from '../pages/ContactPage';
import Redirecting from '../pages/Redirecting';
import AdminPage from '../pages/AdminPage';

const routes = {
  '/': () => <Homepage />,
  '/about': () => <AboutPage />,
  '/coaching': () => <CoachingPage />,
  '/register': () => <RegisterPage />,
  '/contact': () => <ContactPage />,
  '/redirecting': () => <Redirecting />,
  '/dashboard-admin': () => <AdminPage />,
};

export default routes;
