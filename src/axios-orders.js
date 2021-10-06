import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-3f5a7-default-rtdb.firebaseio.com/",
});

export default instance;
