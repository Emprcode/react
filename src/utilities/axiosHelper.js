import axios from 'axios'

export const fetchData = (str) => {
  const apiEP = `http://www.omdbapi.com/?t=${str}&apikey=13d05e42`; 
  const response = axios(apiEP)
return response;
}