import React, { Component } from 'react';
import './recommendations.css'

class Recommendations extends Component {
    render() {
        return (
            <div className="recommend"> 
                  <div>
                     <img className="recommend__image" src = {this.props.item.gifURL}/>
                     <div className="recommend__number">Bookmark Count:{this.props.item.numberOfTimeBookmarked}</div>
                  </div>
            </div>
        );
    }
}

export default Recommendations;