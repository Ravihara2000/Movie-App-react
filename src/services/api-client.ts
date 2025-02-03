import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "995b85eb5208493b92eaa51d1c6f5733",
  },
});

