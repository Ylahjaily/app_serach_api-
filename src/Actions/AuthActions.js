const axios = require('axios');
export const LOGIN_USER = "LOGIN_USER";

const baseUrl = "https://api.insee.fr/entreprises/sirene/V3"

export const auth = (user) => {
    return {
        type : LOGIN_USER,
        user
    }
}

/*
const tokenGenerator = () =>
{
    dispatch => {
        fetch("https://api.insee.fr/token",
    {
        method : GET,
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    }).then(response => console.log(response.json()))
    .then(data => dispatch(auth(data)))
    }
}
*/

let data = {
    client_key : 'a3F4RySb43IRsQo9c54zWbRpWEAa',
    client_secret : 'R896o8MR64TL0MrYTIomWTvSgJca',
    grant_type : 'client_credentials',
}

export const authenticate = () =>
{
    
    return dispatch => {
        axios.post("https://cors-anywhere.herokuapp.com/https://api.insee.fr/token",
    {
        headers : {
            "Content-Type": "x-www-form-urlencoded",
        },
        body : JSON.stringify(data)
    }).then(response => response)
      .then(data => dispatch(auth(data)))
      .catch(error => console.log("Error detected: " + error))
    }
}

export default(authenticate);