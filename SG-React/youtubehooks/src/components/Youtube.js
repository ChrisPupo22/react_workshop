import axios from 'axios'; 

export const KEY = 'AIzaSyAJ8I4VdwrC8WD4MX5v5evE4R15As6zTa0'; 


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    
});