import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<div>
				<Link to='/signup'>회원가입</Link>
			</div>
		</>
	);
};

export default Home;
