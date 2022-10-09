import axios from "axios";


//BASE DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=510723cc9b58d894a142057b193b860d

//URL DA API: movie/now_playing?api_key=510723cc9b58d894a142057b193b860d

const api = axios.create({
    baseURL: "https://mockapi.io/clone/"
});

export default api;
