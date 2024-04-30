import React from "react";

function IdCard(props) {
  return (
    <div id="card">
      <img className="pic" src={props.picture}></img>

      <div id="texto">
        <p>Last Name:{props.lastName} </p>
        <p>First Name:{props.firstName} </p>
        <p>Gender:{props.gender} </p>
        <p>Height:{props.height} </p>
        <p>Birth:{props.birth} </p>
      </div>
    </div>
  );
}
export default IdCard;
