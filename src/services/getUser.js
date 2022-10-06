import axios from "axios";

const getUser = () => {
  return axios.get("https://dummy.restapiexample.com/api/v1/employees");
};

export { getUser };
