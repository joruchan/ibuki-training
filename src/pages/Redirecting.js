import React from 'react';
import Main from '../components/molecules/Main/Main';
import './Redirecting.scss';

const Redirecting = () => (
  <Main page="redirecting">
    <div
      className="redirecting-text"
    >
      <p>Thanks for your submission. Redirecting . . . </p>
      <img src="/images/deco/loading.gif" alt="ibuki training's loader" />
    </div>

  </Main>
);

export default Redirecting;
