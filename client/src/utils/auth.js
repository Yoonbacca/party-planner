// Importing jwt-decode to decode the jwt token
import decode from 'jwt-decode';

// Creating a new class AuthService for handling the authentication
// A class is created so that we can use it later to create a new instance of the class
// Classes are used to create objects
class AuthService {

    getUser() {
        return decode(this.getToken());
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    checkTokenExpiry(idToken) {
        try {           
            const decodedToken = decode(idToken);
            return (decodedToken.exp < Date.now() / 1000) // Checking if token is expired. Note: 1000 is used to convert milliseconds to seconds
        } catch (err) {
            return false;
        }
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }

    checkLoggedIn() {
        const token = this.getToken(); 
        // 1. !!token returns true if token is NOT null or undefined
        // 2. !this.checkTokenExpiry(token) returns true if token is NOT expired
        return !!token && !this.checkTokenExpiry(token);
    }
}

export default new AuthService();