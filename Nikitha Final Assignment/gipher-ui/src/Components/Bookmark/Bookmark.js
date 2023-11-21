import React, { Component } from 'react';
import BookmarkService from '../../Service/BookmarkService'
import Display from '../Display/Display'
import Header from '../Header/Header'
import './bookmark.css'
class Bookmark extends Component {

    constructor(props) {
        super(props);
        this.BookmarkService = new BookmarkService();
        this.state={
            bookmarkedGifs:[],
             errorMsg:'',
             isError:false
        }
        
    }
    
    componentDidMount(){

        let pass = window.localStorage.getItem('id_token');
        let token ="Bearer "+ window.localStorage.getItem('id_token');
        if(pass!==null && pass.length>0)
        {
        this.BookmarkService.fetchBookmarkedGifs(JSON.parse(window.localStorage.getItem('user')),token)
        .then(response=>response.json()
        .then(data=>({status:response.status,body:data})))
        .then(abc=>
            {
            if(abc.status===400)
            {
                this.setState({
                    errorMsg:"No gifs bookmarked yet",
                    isError:true
                })
              
            }
            else if(abc.status===302)
            {
               this.setState({
                   bookmarkedGifs:abc.body
               })
              
            }
        }
            )
    }
    else{
        this.props.history.push({
            pathname: '/login'
        });
    }
}
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <h3 className="log">Your bookmarked gifs</h3>
                </div>
                            {this.state.bookmarkedGifs.length >0 &&
               <div className="dash__book">
                   {this.state.bookmarkedGifs.map((item,id)=><div  key={id}><Display item={item} isBookmark={true}/></div>)}
                
               

               </div>


              }

<div className="errorDisp">
      
      {this.state.isError && <h3>{this.state.errorMsg}</h3>}
      </div>
            </div>
        );
    }
}

export default Bookmark;