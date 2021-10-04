import axios from "axios";

export const fetchUser =  () => {
   return axios.get('https://reqres.in/api/users?page=2')
    .then(resp => {
        console.log(resp)
        return resp.data;
    })
    .catch(err => {
        console.error(err);
    });  
}