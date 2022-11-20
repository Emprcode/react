import axios from 'axios'

const apiEP = "http://www.omdbapi.com/?i=tt3896198&apikey=13d05e42";
export const fetchData = (str) => {
    const response = axios(apiEP)
  return response;
}
