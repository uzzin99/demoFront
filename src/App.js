// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import loginView from "./view/login";

// function App() {
// 	const [hello, setHello] = useState('')

// 	useEffect(() => {
// 		axios.get('http://127.0.0.1:80/api/main/test')
// 		.then(response => setHello(response.data))
// 		.catch(error => console.log(error))
// 	}, []);

// 	// return (
// 	// 	// <div>
// 	// 	// 	백엔드에서 가져온 데이터입니다 : {hello}
// 	// 	// </div>
// 	// 	<Routes>
// 	// 	<Route path="/board" element={<loginView/>}/>
// 	// 	</Routes>
// 	// );
	
// }
function App () {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/mypage">MyPage</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} /> 
				<Route path="/mypage" element={<MyPage />} /> 
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)
  }  

export default App;
