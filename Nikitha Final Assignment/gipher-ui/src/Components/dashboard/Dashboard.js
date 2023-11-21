import React, { Component } from 'react';
import Display from '../Display/Display'
import './dashboard.css'
import Header from '../Header/Header'
import RecommendationService from '../../Service/RecommendationService'
import Recommendations from '../Recommendations/Recommendations'

class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayOfGif: [],
            searchText: "",
            recommededGifsList: []
        }

        this.RecommendationService = new RecommendationService();

    }



    componentDidMount() {

        let pass = window.localStorage.getItem('id_token');
        let token = "Bearer " + window.localStorage.getItem('id_token');

        if(pass!==null && pass.length>0)
        {
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=TPv7bvunmXCXIeVqVUetvjljbb3qB4Vg&limit=10&rating=g")
            .then(response => response.json())
            .then(resp => {
                this.setState({
                    arrayOfGif: resp.data
                })

            });

        this.RecommendationService.fetchRecommendedGifs(token)
            .then(response => response.json()
                .then(data => ({ status: response.status, body: data })))
            .then(abc => {
                if (abc.status === 302) {

                    this.setState({
                        recommededGifsList: abc.body
                    })

                }
                else if (abc.status === 400) {
                    console.log("not found yooo")
                }
            }
            )

    }
    else 
    {
        this.props.history.push({
            pathname: '/login'
        });
    }
}


    searchHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })


    }

    keyPress = (event) => {
        if (event.keyCode === 13) {
            let searchText = event.target.value;
            fetch("https://api.giphy.com/v1/gifs/search?api_key=TPv7bvunmXCXIeVqVUetvjljbb3qB4Vg&q=" + searchText + "&limit=10&offset=0&rating=g&lang=en")
                .then(response => response.json())
                
                .then(resp => {

                    this.setState({
                       
                        arrayOfGif: resp.data
                    })
                }
                )
        }
    }




    render() {
        return (


            <div>
                <Header></Header>
                <div className="dash__search">
                    <input  className="dash__input" type="text" placeholder="Type text and Enter" name="searchText" onKeyDown={this.keyPress} value={this.state.searchText} onChange={this.searchHandler} ></input>
                </div>
                <div className="dash__main">
                    <div>
                        {this.state.arrayOfGif.length > 0 ?
                            <div className="dash__left">
                                {this.state.arrayOfGif.map((item, id) => 
                                
                                <Display key={id} isGifDisplay={true} item={item} />
                                
                                
                                )}
                            </div>:
                            <div className="dash__left">No Results found!!!</div>
                        }
                        </div>
                         <div>
                         <h3 className="recommend__title">Popular Gifs</h3>
                         {this.state.recommededGifsList.length > 0 &&
                            <div className="dash__right">
                                {this.state.recommededGifsList.map((item, id) => <div key={id}><Recommendations  item={item} /></div>)}
                            </div>
                        } 
                        </div>
                </div>
            </div>


        );
    }
}

export default dashboard;