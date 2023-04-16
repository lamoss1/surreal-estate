import React from "react";

const Alert = (props) => {
  const { message, success } = props;

  if (success === true) {
    message = "correct!";
  } else (!success === false) {
    message = "error!";
  }
};
