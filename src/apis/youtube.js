import axios from "axios";

const KEY ="AIzaSyBn3OBdDSup6IWQry7yifRT6AdToPIKOJg"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
       part:"snippet",
       maxResults:5,
       key:KEY
    }
});
