import React from 'react';
import { Link } from 'react-router-dom';

import TMDBLogo from './images/TMDBLogo.png';
import './MainFooter.scss';

const MainFooter = () => {
  return(
    <footer className="main-footer">

      <section className="main-footer-top">

        <header className="main-footer-top-header">
          <h2 className="main-footer-top-header__title wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.2s">SWIPE FRIGHT</h2>
          <nav className="main-footer-top-header-nav">
            <Link className="wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1.2s" to="/">Home</Link>
            <Link className="wow fadeInLeft" data-wow-delay=".9s" data-wow-duration="1.2s" to="/log-in">Profile</Link>
            <Link className="wow fadeInLeft" data-wow-delay="1.1s" data-wow-duration="1.2s" to="/discover">Discover</Link>
          </nav>
        </header>

        <div className="main-footer-top-item">
          <h3 className="main-footer-top-item__title">portfolio:</h3>
          <p><a href="www.eric-oneill.com" target="_blank" rel="noopener noreferrer">www.eric-oneill.com</a></p>
        </div>

        <div className="main-footer-top-item">
          <h3 className="main-footer-top-item__title">phone number:</h3>
          <p>267 455-5383</p>
        </div>

        <p className="main-footer-top-copyright">Copyright &copy;2018<br /> Code and design by <a href="www.eric-oneill.com" target="_blank" rel="noopener noreferrer">Eric O'Neill</a></p>

      </section>

      <section className="main-footer-bottom">

        <img className="main-footer-bottom-section-1 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1.2s" src={TMDBLogo} alt="TMDB Logo" />

        <div className="main-footer-bottom-section-2">

          <a href="https://twitter.com/themoviedb" target="_blank" rel="noopener noreferrer">
            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/></svg>
          </a>

          <a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener noreferrer">
            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/></svg>
          </a>

          <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">
            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay="1.1s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"/></svg>
          </a>

        </div>

      </section>

    </footer>
  );
};

export default MainFooter;
