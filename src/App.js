import React from 'react';
import { useRoutes, usePath } from 'hookrouter';

import './App.scss';
import Header from './components/molecules/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import routes from './routes/routes';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const path = useRoutes(routes);

  return (
    <>
      <Header frontPage={path.type.name === 'Homepage'} />
      {path || <NotFoundPage />}
      <Footer />
    </>
  );
}

export default App;
