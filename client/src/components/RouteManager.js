import Axios from "axios";

// Further simplifies any server interactions
const RouteManager = (request, source, ukey) => {
  var data = "";
  var source = "";

  switch (request) {
    case "get": {
      function getNew() {
        Axios({
          method: "get",
          url: `http://127.0.0.1/api/${source}&${ukey}`,
        })
          .then((res) => data)
          .catch((err) => console.log("error"));
      }
      break;
    }
    case "put": {
      function putNew() {
        Axios({
          method: "put",
          url: `http://127.0.0.1/api/${source}&${ukey}`,
        })
          .then((res) => data)
          .catch((err) => console.log("error"));
      }
      break;
    }
    default:
      break;
  }

  return data;
};

export default RouteManager;
