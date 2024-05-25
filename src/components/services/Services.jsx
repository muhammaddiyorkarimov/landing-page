import React, { useEffect, useState } from 'react'
import './Services.css'
import Modal from './../modal/Modal';
import Card from './../CardAbout/Card';

function Services() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedCard, setSelectedCard] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://myteam001.pythonanywhere.com/main/services/');
				if (!response.ok) {
					throw new Error('Network response was not ok ' + response.statusText);
				}
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const handleCloseModal = () => {
		setSelectedCard(null);
		
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	return (
		<div className='services'>
			<div className="container">
				<div className="main-title"><h1>Bizning xizmatlarimiz</h1></div>
				<div className="cards">
					{data.length > 0 && data.map((item) => (
						<>
							<Card key={item.id} item={item} onClick={() => handleCardClick(item)} />
						</>
					))}
				</div>
				{selectedCard && (
					<Modal
						item={selectedCard}
						onClose={handleCloseModal}
					/>
				)}
			</div>
		</div>
	)
}

export default Services