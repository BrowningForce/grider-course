import axios from 'axios';

const KEY = 'AIzaSyCs8aHXgLRSVHLtHetPAdI1EJwMb4IeYmU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});