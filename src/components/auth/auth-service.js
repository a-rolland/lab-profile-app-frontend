// import axios from 'axios';

// const AuthService = () => {
//     let initiateService = axios.create({
//         baseURL: 'http://localhost:5000/auth',
//         withCredentials: true
//     });
//     let service = initiateService;

//     const signup = (username, password) => {
//         return service.post('/signup', { username, password })
//             .then(response => response.data)
//     }

//     const loggedin = () => {
//         return service.get('/loggedin')
//             .then(response => response.data)
//     }

//     const login = (username, password) => {
//         return service.post('/login', { username, password })
//             .then(response => response.data)
//     }

//     const logout = () => {
//         return service.post('/logout', {})
//             .then(response => response.data)
//     }
// }

// export default AuthService;


import axios from 'axios';
 
const service = axios.create({
    baseURL: 'http://localhost:5000/auth',
    withCredentials: true
});
 
const errorHandler = err => {
  throw err;
};
 
export default {
    service,

    signup(username, password) {
    return service.post('/signup', { username, password })
        .then(response => response.data)
        .catch(errorHandler)
    },

    loggedin(){
    return service.get('/loggedin')
        .then(response => response.data)
    },

    login(username, password) {
        return service.post('/login', { username, password })
            .then(response => response.data)
    },

    logout() {
        return service.post('/logout', {})
            .then(response => response.data)
    }   
}