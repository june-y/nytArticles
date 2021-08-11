import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2',
  headers: {
    Authorization: 'Bearer 5wEsQicCNFAuxahGTKLYtUSePQ7YpdyM'
  }
});
