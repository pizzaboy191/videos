import axios from 'axios';


const KEY = 'AIzaSyDE5JN-Hi7GcGWtud4gDWepOJxdXKV95XQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResutls: 5,
    key: KEY
  }
});
