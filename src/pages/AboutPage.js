import React from 'react';
import Main from '../components/molecules/Main/Main';
import './AboutPage.scss';

const AboutPage = () => (
  <Main page="about">
    <section className="about-yuji">
      <div className="about-yuji__text">
        <h3 className="content-title">Yuji</h3>
        <p>
          Born in Brussels, Belgium, Yuji has always had
          a knack for competition.
        </p>

        <p>
          With a background training in physical therapy
          and an innate passion for sports, Yuji decided
          to mix passion and work and became a
          Personal Trainer in 2015. His impeccable
          knowledge of anatomy and nutrition will help
          guarantee lasting results throughout your
          training and after. Smart, effective and
          to-the-point workouts are his strong points.
        </p>

        <p>
          From Kyokushin Karate to MMA, his feats are
          well-known and respected.
        </p>

        <p>
          In 2018, he expanded his services by offering
          individual and group classes, effectively
          going back to his roots and his most prized
          passion : martial arts and combat sports.
        </p>

        <p>
          Rigorous work, discipline and perseverance
          will be met with light-hearted fun and a
          &quot;home&quot; feeling when you train with Yuji.
        </p>

      </div>
      <div className="divider" />
    </section>
    <section className="about-get">
      <div className="about-get__text">
        <h3 className="content-title">Get in touch</h3>
        <div className="content-paragraphs">
          <p>
            Are you looking for a
            {' '}
            <strong>FUN, JUDGMENT-FREE,</strong>
            {' '}
            but especially
            {' '}
            <strong>EFFECTIVE</strong>
            {' '}
            training ?
          </p>
          <p>
            <strong>I am the perfect match for you.</strong>
          </p>
        </div>
        <div className="content-links">
          <a href="/" className="map-link" target="_blank">Come to Basic-Fit in Waterloo</a>
          <a href="/register" className="register-link">Register your availabilities</a>
          <a href="/contact" className="contact-link">Contact me</a>
        </div>
      </div>
    </section>
  </Main>
);

export default AboutPage;
