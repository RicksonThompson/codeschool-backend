import axios from 'axios';

const apiYoutube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default apiYoutube;
