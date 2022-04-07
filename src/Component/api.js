import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost/laravel/laravel/public/api/"
});

export const urlProductImage = 'http://localhost/laravel/laravel/upload/product/';

export const getConfig = (token) => {
    return   {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }
}