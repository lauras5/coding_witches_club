import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import NavHome from './components/nav_item/nav_item';
import FooterHome from './components/footer/footer';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavHome></NavHome>
        <Route exact path='/' component={HomePage} />
        <FooterHome></FooterHome>
      </div>
    </Router>
  )
}

export default AppRouter;