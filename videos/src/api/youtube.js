import axios from 'axios';

const KEY = 'AIzaSyADaXy9_1Jfh3tarEe_kVnuBQH2PArusQE';

//setup preconfig axios


const api = axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3'
});

// api.interceptors.request.use((config) => {
//   config.params = {
//     part: 'snippet',
//     maxResult: 5,
//     key: KEY }
//   return config;
// });

export default api;
