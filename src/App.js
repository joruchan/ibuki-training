import React, { Suspense, useEffect, useState } from 'react';
import { useRoutes, usePath } from 'hookrouter';

import './App.scss';
import Header from './components/molecules/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import routes from './routes/routes';
import NotFoundPage from './pages/NotFoundPage';
import Loader from "./components/atoms/Loader";


function App() {
  const path = useRoutes(routes);

  return (
    <Suspense fallback={<Loader />}>
      {path.type.name === 'AdminPage' ? '' : <Header frontPage={path.type.name === 'Homepage'} />}
      {path || <NotFoundPage />}
      {path.type.name === 'AdminPage' ? '' : <Footer />}
    </Suspense>
  );
}

export default App;
