// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Login from "./view/login";
import Home from "./view/home";

function App () {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} /> 
				<Route path="/login" element={<Login />} /> 
			</Routes>
		</div>
	)
}

export default App;
