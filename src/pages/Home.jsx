import React from 'react'
// import Carousel from '../components/Carousel'
// images
import automation1 from '../images/automation1.png';
import automation2 from '../images/automation2.png';
import automation3 from '../images/automation3.png';

import About_us from '../components/aboutUs/About_us'
import Services from '../components/services/Services';
import Carousel from './../components/carousel/Carousel';
import OurTeams from '../components/ourTeams/OurTeams';
import Contact from './../components/contact/Contact';
import Partners from '../components/partners/Partners';

function Home() {

	const images = [automation1, automation2, automation3]

	return (
		<div className='Home'>
			<div className="logo-items">
				<div className="container">
					<Carousel images={images} />
				</div>
			</div>
			<About_us />
			<Partners/>
			<Services />
			<OurTeams/>
			<Contact/>
		</div>
	)
}

export default Home