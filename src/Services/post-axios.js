// Returns latest five posts
import axios from "axios";
const url = "http://localhost:3000/src/Services/data.json"
export const getLatest = (date) => {
    return axios
    .get(`${url}/users`)
    .then((response) => {
      console.log(response.data);
      return response.data[date].slice(0, 5);
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};