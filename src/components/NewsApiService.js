import axios from "axios";

const API_KEY = "2888ef306ba84b86982cfac10e0380c3";

const NewsApiService = {
  getData: () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=${API_KEY}`);
  },
};

export default NewsApiService;