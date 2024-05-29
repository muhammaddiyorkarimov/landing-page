import React from 'react';

import automation1 from '../images/automation1.png';
import automation2 from '../images/automation2.png';
import automation3 from '../images/automation3.png';

import About_us from '../components/aboutUs/About_us';
import Services from '../components/services/Services';
import Carousel from '../components/carousel/Carousel';
import OurTeams from '../components/ourTeams/OurTeams';
import Contact from '../components/contact/Contact';
import Partners from '../components/partners/Partners';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Certificate from '../components/certificates/Certificate';

function Home() {
  const images = [automation1, automation2, automation3];

  return (
    <div className='Home'>
      <div id="home" className="logo-items">
        <div className="container">
          <Carousel images={images} />
        </div>
      </div>
      <section id="about-us">
        <About_us />
        <Certificate/>
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="our-teams">
        <OurTeams />
      </section>
      <section id="contact">
        <Contact />
      </section>
			<BackToTopButton/>
    </div>
  );
}

export default Home;
