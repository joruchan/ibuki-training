import { useTitle } from 'hookrouter';
import React from 'react';
import Banner from '../components/atoms/Banner.js/Banner';
import Main from '../components/molecules/Main/Main';
import './CoachingPage.scss';

const CoachingPage = () => {
    useTitle('Yuji Galand | Coaching');
    return (
        <Main page='coaching'>
            <div className='coaching-text'>
                <h3 className='content-title'>Formulas</h3>
                <p />
            </div>
            <section>
                <Banner text='Group Sessions' img='/images/pics/banner1.jpg' />
                <div className='formula-details group-training'>
                    <div className='formula-details__text'>
                        <h5>
                            Sweating is better when it&apos;s with <strong>friends</strong>!
                        </h5>
                        <div>
                            <p>
                                It&apos;s been proven. It is known. This study shows that group
                                coaching increases your friendship as well as your health.
                            </p>
                            <p> So what are you waiting for? Book your appointment now!</p>
                        </div>
                    </div>
                    <div className='formula-details__boxes'>
                        <div className='formula-details__boxes-single'>
                            <h6>Requirements</h6>
                            <div className='box-details'>
                                <p>
                                    <span>3</span> persons min.
                                </p>
                                <p>
                                    <span>10</span> €/participant
                                </p>
                                <p>
                                    <span>1</span> hour session
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Banner text='Personal Training' img='/images/pics/banner2.jpg' />
                <div className='formula-details personal-training'>
                    <div className='formula-details__text'>
                        <h5>
                            Get personal sessions tailored to <strong>your</strong> needs!
                        </h5>
                        <div>
                            <p>
                                Wether it&apos;s for weight loss, mass gain, working on your
                                endurance, or just for fun, it&apos;s also known that individual
                                training is the best thing.
                            </p>

                            <p>
                                Prepare for a competition, a marathon, a Strong Viking or Spartan
                                run while understanding how exercice affects your body, your health,
                                and your mood.
                            </p>

                            <p>
                                {' '}
                                So get some group AND individual training. You deserve it. You know
                                you want it.
                            </p>
                            <p>
                                Enter your availabilities <a href='/register'>here</a> and I will
                                get back to you to book your spot.
                            </p>
                        </div>
                    </div>
                    <div className='formula-details__boxes'>
                        <div className='formula-details__boxes-single'>
                            <h6>Details</h6>
                            <div className='box-details'>
                                <p>
                                    <span>60</span> €/hour
                                </p>
                                <p>
                                    <span>1</span> hour session
                                </p>
                            </div>
                        </div>
                        <div className='formula-details__boxes-single m-top best'>
                            <h6>Best Deal</h6>
                            <div className='box-details'>
                                <p>
                                    <span>500</span> €
                                </p>
                                <p className='for'>for</p>
                                <p>
                                    <span>10</span> sessions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Banner text='Boxing / MMA' img='/images/pics/banner3.jpg' />
                <div className='formula-details boxing-training'>
                    <div className='formula-details__text'>
                        <h5>
                            Martial arts are my <strong>passion</strong>.
                        </h5>
                        <div>
                            <p>
                                With an affinity for close-contact combat such as Kyokushin Karate
                                or MMA, I&apos;ll be able to coach you and teach you everything you
                                need to know to become an effective fighter.
                            </p>
                            <p>
                                Wether you are a beginner or pro athlete seeking to get better,
                                I&apos;ll share my extensive knowledge with you to perfect your
                                technique.
                            </p>
                            <p>
                                As a group or alone, come free yourself of any negative energy and
                                channel it to become stronger.
                            </p>
                        </div>
                    </div>
                    <div className='formula-details__boxes-single best'>
                        <div className='box-details'>
                            <p>
                                <a href='/contact'>Contact me for a quote!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default CoachingPage;
