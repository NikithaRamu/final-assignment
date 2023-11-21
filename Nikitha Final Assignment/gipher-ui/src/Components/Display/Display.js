import React, { Component } from 'react';
import './display.css'
import BookmarkService from '../../Service/BookmarkService'




class Display extends Component {

    constructor(props) {
        super(props);
        this.BookmarkService = new BookmarkService();
        
    }
    saveBookmark=()=>{

        

        let token = window.localStorage.getItem('id_token');
     
        let gif = {gifId:this.props.item.id,gifURL:this.props.item.images.downsized.url,bookmarkCreatedAt:[]}
  
        
        this.BookmarkService.saveBookmark("Bearer "+token,gif,JSON.parse(window.localStorage.getItem('user')))
        .then(response=>response.json()
        .then(data=>({status:response.status,body:data})))
        .then(abc=>
            {
            if(abc.status===409)
            {
                window.alert("Already Bookmarked");
            }
            else if(abc.status===201)
            {
                window.alert("Bookmark Saved");
            }
        }
            ) 
    }

    deleteBookmark=()=>{

        let token = "Bearer "+window.localStorage.getItem('id_token');
        let gifId = {gifId:this.props.item.gifId}
  
        this.BookmarkService.deleteBookmark(token,gifId.gifId,JSON.parse(window.localStorage.getItem('user')))
        .then(window.location.reload())
        
    }
//render
    render() {
        return (
          
            <span>
               <div>
               {this.props.isGifDisplay &&
                  <div className="display__card" >
                    <img className="display__image" src = {this.props.item.images.downsized.url}/>
                    <button className="display__button" onClick={this.saveBookmark}>bookmark</button>
                  </div>
                     
                }
                </div>
                

                {this.props.isBookmark ?
                <div className="display__bookmark">
                  <div className="display__card" >
                  <img className="display__image" src = {this.props.item.gifURL}/>
                  <button  className="display__button" onClick={this.deleteBookmark}>Delete</button>
                  </div>
                  </div>
                  :
                  <div></div>
                 }

   


                
            </span>
        
        );
    }
}

export default Display;