import React from 'react';
import Header from '../components/molecules/Header/Header';
import Main from '../components/molecules/Main/Main';
import FrontPageCard from '../components/atoms/FrontPageCard/FrontPageCard';
import Footer from '../components/atoms/Footer/Footer';


export default {
  title: 'overview/Ibuki',
};


export const Display = () => (

  <>
    <Header frontPage />
    <Main page="home">
      <section>
        <FrontPageCard picture="images/pics/pic4.jpg" altText="People squatting">
          Group training, one on
          one sessions, workshops,
          find the format that fits
          {' '}
          <em>you best !</em>
        </FrontPageCard>
        <FrontPageCard picture="images/pics/pic2.jpg" altText="People squatting" alignment="pic-right">
          <em>Martial arts</em>
          {' '}
          is my passion. Are you looking to
          improve your technique, or are you looking
          for a
          {' '}
          <em>new thrill?</em>
        </FrontPageCard>
        <FrontPageCard picture="images/pics/pic3.jpg" altText="People squatting">
          Lose weight, gain mass,
          get back in shape,
          perfect your technique,
          there&apos;s a program
          for
          {' '}
          <em>everybody.</em>
        </FrontPageCard>
      </section>
    </Main>
    <Footer />
  </>

);
