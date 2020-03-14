import React from 'react';
import Main from '../components/molecules/Main/Main';
import FrontPageCard from '../components/atoms/FrontPageCard/FrontPageCard';

const Homepage = () => {

  return (<Main page="home">
    <section>
      <FrontPageCard picture="images/pics/pic4.jpg" altText="People squatting" moreTxt="View All" moreLink="/coaching">
        Group training, one on
        one sessions, workshops,
        find the format that fits
        {' '}
        <em>you best !</em>
      </FrontPageCard>
    </section>
    <section>
      <FrontPageCard picture="images/pics/pic2.jpg" altText="People squatting" alignment="pic-right" moreTxt="About Yuji" moreLink="/about">
        <em>Martial arts</em>
        {' '}
        is my passion. Are you looking to
        improve your technique, or are you looking
        for a
        {' '}
        <em>new thrill?</em>
      </FrontPageCard>
    </section>
    <section>
      <FrontPageCard picture="images/pics/pic3.jpg" altText="People squatting" moreTxt="Contact Me" moreLink="/contact">
        Lose weight, gain mass,
        get back in shape,
        perfect your technique,
        there&apos;s a program
        for
        {' '}
        <em>everybody.</em>
      </FrontPageCard>
    </section>
    <aside>
      <p className="accent-phrase">
        Are you ready? Let&apos;s
        {' '}
        <a href="/contact">GO!</a>
      </p>
    </aside>
  </Main>

  )
};

export default Homepage;
