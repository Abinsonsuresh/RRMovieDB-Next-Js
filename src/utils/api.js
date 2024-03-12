import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZlNjM4MzJhMzY2ODU5ZDFkNjBkNGFhZDI0MWE0MyIsInN1YiI6IjY1OWFiZmNiYzk5NWVlMDA5NWNmMjg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KgtMgpKfZ-T2V2Tmtz2cXlmLufv4hAW8Q3vcl1Bx1yI"
// console.log(TMDB_TOKEN)

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};


export const APIData = async(url,params)=>{
    try {
       const {data} = await axios.get(BASE_URL + url,{headers, params})
       return data;
    } catch (error) {
        console.log(error)
        return error
    }
}