export default class RecommendationService {




    fetchRecommendedGifs(token) {

        return fetch('http://localhost:8084/recommend/api/v1/recommend/allgifs', {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

}

