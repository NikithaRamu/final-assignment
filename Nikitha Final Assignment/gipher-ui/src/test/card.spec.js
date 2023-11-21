import React from 'react';
import ReactDom from 'react-dom'
import Display from '../Components/Display/Display'
test('renders without failing', () => {

    var hello=()=>{
        console.log("hello")
    }
    var item={
        author:"dummy author",
        title:"dummytitle",
        urlToImage:"dummmy url"

    }
    const div= document.createElement("div")
    ReactDom.render(<Display readNewsLater={hello} newsItem={item}></Display>,div)
   });
  
  test('test 2', () => {
    expect(true).toBeTruthy();
  });

export default Display;