import React from 'react';
import ReactDom from 'react-dom'
import Header from '../Components/header/Header';
test('renders without failing', () => {
   const div= document.createElement("div")
   ReactDom.render(<Header></Header>,div)
  });
  
  test('test 2', () => {
    expect(true).toBeTruthy();
  });
export default Header;