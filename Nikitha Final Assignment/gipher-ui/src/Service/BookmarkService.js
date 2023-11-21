export default class BookmarkService {




    fetchBookmarkedGifs(userId,token) {

        return fetch('http://localhost:8084/gipher/api/v1/bookmark/'+userId, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }



    saveBookmark(token, gif,userId) {

        return fetch('http://localhost:8084/gipher/api/v1/bookmark/'+userId+'/gif', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gif)
        })
        
    }

    deleteBookmark(token, gifId,userId) {
     
        return fetch('http://localhost:8084/gipher/api/v1/bookmark/'+userId+'/'+gifId, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
          
        })
        
    }

}

