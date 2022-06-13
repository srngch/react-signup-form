import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home-wrapper'>
			<h1>Home</h1>
			<div className='button-wrapper'>
				<Link className='button' to='/signup'>회원가입</Link>
			</div>
		</div>
	);
};

export default Home;
