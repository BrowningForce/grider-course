import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID T74m6DPWWUj2dqu_hKtgBEw5ewDN0l_h-gnkHy5uGpw',
  },
});
