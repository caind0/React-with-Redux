import axios from 'axios';

// const SearchImages = (term) => {
//
// }

//cerate instance of axios client
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b145f41ac0f1205b2fd6b95440b15977dc8ebd18959834f57690a0a40afa71a9'
  }
});
