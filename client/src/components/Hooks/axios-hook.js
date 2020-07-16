import MockData from "../Functions/MockData";
import axios from "axios";

// Returns data from server based on query.
export const GetHttp = (source, query) => {
  let data = "";
  let error = false;

  axios
    .get(`http://127.0.0.1:5000/api/${source}${query}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
      error = true;
    });

  if (error) {
    console.log("Axios reported no errors");
    return data;
  } else {
    console.log("You are receiving mock data because axios returned an error.");
    return MockData();
  }
};

export const PostHttp = (target, data) => {
  let error = false;
  axios
    .post(`http://localhost:5000/api/${target}`, data)
    .then((res) => {
      if (res.data.status === "1") {
        console.log("Axios returned no errors.");
      }
      return res.data;
    })
    .catch((error) => {
      console.log("Axios returned an error:");
      console.log(error);
      throw error;
    });
};

export default { GetHttp, PostHttp };
