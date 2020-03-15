import React from 'react';
import AboutPage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import CoachingPage from '../pages/CoachingPage';
import ContactPage from '../pages/ContactPage';
import Homepage from '../pages/Homepage';
import Privacy from '../pages/Privacy';
import Redirecting from '../pages/Redirecting';
import RegisterPage from '../pages/RegisterPage';

const routes = {
    '/': () => <Homepage />,
    '/about': () => <AboutPage />,
    '/coaching': () => <CoachingPage />,
    '/register': () => <RegisterPage />,
    '/contact': () => <ContactPage />,
    '/redirecting': () => <Redirecting />,
    '/privacy': () => <Privacy />,
    '/dashboard-admin': () => <AdminPage />
};

export default routes;
