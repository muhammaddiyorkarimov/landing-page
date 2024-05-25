import React, { useState } from 'react'

// css
import './RootLayout.css'
import { Link, NavLink, Outlet } from 'react-router-dom'

function RootLayout() {

	const [active, setActive] = useState('')
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleDropdown = (dropdown) => {
		setActive(active === dropdown ? "" : dropdown);
	};

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className='root-layout'>
			<header>
				<div className="container">
					<Link className="logo" to="/">.agency</Link>
					<div className="header-right">
					</div>
					<nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
						<div style={{ position: 'absolute', right: '20px' }} className="hamburger-menu" onClick={toggleSidebar}>
							<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
							<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
							<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
						</div>
						<li><NavLink to='/'>Asosiy</NavLink></li>
						<li><NavLink to='/about-us'>Biz haqimizda</NavLink></li>
						<li><NavLink to='/services'>Xizmatlar</NavLink></li>
						<li><NavLink to='/contact'>Aloqa</NavLink></li>
						<div className="contact">
							<i className="fa-solid fa-phone"></i>
							<span>+998 99 999 99 99</span>
						</div>
					</nav>
					<div className="select-language">
						<span className='active'>Uz</span>
						<span>Ru</span>
					</div>
					<div className="hamburger-menu" onClick={toggleSidebar}>
						<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
						<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
						<span className={sidebarOpen ? 'bar open' : 'bar'}></span>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer className='container'>
				<div style={{padding: '50px'}} className="contact-card">
					<div className="contact-info">
						<h2>Kontakt</h2>
						<p><i className="fa fa-phone"></i> +998 55-518-7007</p>
						<p><i className="fa fa-envelope"></i> onefin.uz@gmail.com</p>
						<h3>Ijtimoiy tarmoqlarimiz</h3>
						<div className="social-media">
							<a href="#"><i className="fab fa-telegram"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-facebook"></i></a>
						</div>
						<p><i className="fa fa-map-marker"></i> Toshkent shahar, Yakkasaroy tumani, Rakatboshi mahallasi, O'rikzor ko'chasi 7-uy, Rakatboshi Biznes Center 202-xona</p>
					</div>
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.152008837428!2d69.2323!3d41.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a00a4f0b5%3A0xfbf5e9b5750c5c3b!2sTashkent!5e0!3m2!1sen!2suz!4v1618043355763!5m2!1sen!2suz"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Google Map"
						></iframe>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default RootLayout