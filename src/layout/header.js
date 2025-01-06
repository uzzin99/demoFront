/* Header.js */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      헤더입니다.
      <div><Link to="/">홈</Link></div>
      <div><Link to="/login">로그인</Link></div>
      <hr/>
    </header>
  );
};

export default Header;