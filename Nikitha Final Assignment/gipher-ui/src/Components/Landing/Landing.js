import React, { Component } from 'react';
import Display from '../Display/Display';
import './display.css'

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state={
            arrayOfGif:[]
        }
        
    }

    componentDidMount(){
       
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=TPv7bvunmXCXIeVqVUetvjljbb3qB4Vg&limit=25&rating=g")
        .then(response => response.json())
        .then(resp => {this.setState({
            arrayOfGif:resp.data
        })
      
    });
       
    }
    
    render() {
        return (
            <div>
               {this.state.arrayOfGif.length >0 &&
               <div className="test">
                   {this.state.arrayOfGif.map((item,id)=><div  key={id}><Display item={item} /></div>)}
                
               {/* <img src = {this.state.arrayOfGif[0].images.original.url}/> */}

               </div>
              }
            </div>
        );
    }
}

export default Landing;