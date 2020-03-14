import React, { Suspense } from 'react';
import { useRoutes } from 'hookrouter';

import './App.scss';
import Header from './components/molecules/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import routes from './routes/routes';
import NotFoundPage from './pages/NotFoundPage';
import Loader from "./components/atoms/Loader";
import BackToTop from './components/atoms/BackToTop';
import { useTransition, animated } from "react-spring";



function App() {
  const path = useRoutes(routes);
  const transitions = useTransition(path, path => path.type.name, {
    from: { opacity: 0, transform: "translateY(2%)" },
    enter: { opacity: 1, transform: "translateY(0)"},
    leave: { opacity: 0, transform: "translateY(2%)"},
  })
  return (
    <Suspense fallback={<Loader />}>
      {path.type.name === 'AdminPage' ? '' : <Header frontPage={path.type.name === 'Homepage'} />}
      {transitions.map(({ item: path, props, key }) => (
        <animated.div key={key} style={props}>
          {path || <NotFoundPage />}
          {path.type.name === 'AdminPage' ? '' : <Footer />}
        </animated.div>))}
      <BackToTop />
    </Suspense>
  );
}

export default App;
