import React from 'react';
import Main from '../components/molecules/Main/Main';
import './CoachingPage.scss';
import Banner from '../components/atoms/Banner.js/Banner';

const CoachingPage = () => (
  <Main page="coaching">
    <div className="coaching-text">
      <h3 className="content-title">Formulas</h3>
      <p />
    </div>
    <section>
      <Banner text="Group Sessions" img="/images/pics/banner1.png" />
      <div className="formula-details">
        <div className="formula-details__text">
          <h5>
            Sweating is better when it&apos;s with
            {' '}
            <strong>friends</strong>
            !
          </h5>
          <div>
            <p>
              It&apos;s been proven. It is known. This study shows that group coaching increases your friendship as well as your health.
            </p>
            <p> So what are you waiting for? Book your appointment now!</p>
          </div>
        </div>
        <div className="formula-details__boxes">
          <div className="formula-details__boxes-single">
            <h6>Requirements</h6>
            <div className="box-details">
              <p>
                <span>3</span>
                {' '}
                persons min.
              </p>
              <p>
                <span>10</span>
                {' '}
                €/participant
              </p>
              <p>
                <span>1</span>
                {' '}
                hour session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <Banner text="Personal Training" img="/images/pics/banner2.png" />
      <div className="formula-details">
        <div className="formula-details__text">
          <h5>
            Get personal sessions tailored to
            {' '}
            <strong>your</strong>
            {' '}
            needs!
          </h5>
          <div>
            <p>
              It&apos;s been proven. It is known. This study shows that group coaching increases your friendship as well as your health.
            </p>
            <p> So what are you waiting for? Book your appointment now!</p>
          </div>
        </div>
        <div className="formula-details__boxes">
          <div className="formula-details__boxes-single">
            <h6>Details</h6>
            <div className="box-details">
              <p>
                <span>60</span>
                {' '}
                €/hour
              </p>
              <p>
                <span>1</span>
                {' '}
                hour session
              </p>
            </div>
          </div>
          <div className="formula-details__boxes-single m-top">
            <h6>Best Deal</h6>
            <div className="box-details">
              <p>
                <span>500</span>
                {' '}
                €
              </p>
              <p className="for">for</p>
              <p>
                <span>10</span>
                {' '}
                sessions
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  </Main>
);

export default CoachingPage;
