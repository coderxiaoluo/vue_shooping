import LRequest from "./request";
import { BASE_URL1, TIME_OUT1 } from "./config";

const lRequest = new LRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default lRequest;
