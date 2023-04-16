import axios from "axios";
import React from "react";

const postProperty = (fields) => {
  const baseURL = "http://localhost:3000/api/v1/PropertyListing";
  const [setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return axios
    .post(baseURL, fields)
    .then((response) => {
      setPost(response.data);
    })
    .catch(() => {
      return "Error!";
    });
};

export default postProperty;
