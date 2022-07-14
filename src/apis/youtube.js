import axios from "axios";
//install axios -> npm install --save axios

const KEY = "AIzaSyC7RdJqM1r3cl_0tWg4UmxyQlXRm6HjZsE";
//snippet = what information we want to retrieve about each particular video that we end up finding. says to API, send us snippet summary of the entire video
//video title, description, link, author etc.

//maxResults -> maximum number of results to be sent

//start setting up axios

//creating preconfigured instance of axios that has a base url
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3", //later    on get this instance and add something like /search

  params: {
    part: "snippet",
    maxResults: 5,
    //we have to append our API key onto our URL whenever we try to make a request
    key: KEY,
    //not adding q beacuse we do not want to preconfigure our query
  },
});
