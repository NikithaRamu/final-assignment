export default class AuthService {
    // Initializing important variables
    constructor() {
        this.loginUser = this.loginUser.bind(this)
    }


    loginUser(userId, password) {
        // Get a token from api server using the fetch api
     
        return fetch('http://localhost:8084/user/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId:userId,
                password:password
            })
        })
    }

    registerUser(userId, password)
    {
    

        return fetch('http://localhost:8084/user/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
                userId:userId,
                password:password
            })
        })


    }

    isUserAuthenticated(token) {
        return fetch('http://localhost:3001/auth/v1/isAuthenticated', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(res => res.json())
            .then(data => {

                return Promise.resolve(data);
            })
    }

    setToken(idToken) {
        // Saves user token to localStorage
     
        window.localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
  
        return window.localStorage.getItem('id_token')
    }

    isUserlogout() {
        // Clear user token and profile data from localStorage

        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('user');

    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
