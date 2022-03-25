import React from "react";
import DisplayUser from "./DisplayUser";
import "./UserDetails.css";

const UserDetails = (props) => {

  if (props.data.length === 0) {
    return <div>No found!</div>;
  }
  
  const user = props.data.map((element) => {
    console.log(element.name);
    return <DisplayUser data={element} />;
  });

  return <div className="user-style">{user}</div>;
};

export default UserDetails;
