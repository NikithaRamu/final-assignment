import React from 'react';
import ReactDom from 'react-dom'
import Dashboard from '../Components/dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
test('renders without failing', () => {
  const div= document.createElement("div")
  ReactDom.render(<BrowserRouter><Dashboard></Dashboard></BrowserRouter>,div)
 });
  
  test('test 2', () => {
    expect(true).toBeTruthy();
  });
  
  test('test 2', () => {
    expect(true).toBeTruthy();
  });

export default Dashboard;