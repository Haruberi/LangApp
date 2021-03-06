import React from "react";
import Button from "react-bootstrap/Button";

const ChineseCourses = () => {
  return (
    <div className="App">
      <h1>Learn Chinese</h1>
      <p>Choose a level</p>
      <>
        <Button variant="outline-danger">JAPANESE LEVEL 1</Button>{" "}
        <Button variant="outline-danger">JAPANESE LEVEL 2</Button>{" "}
        <Button variant="outline-danger">JAPANESE LEVEL 3</Button>{" "}
      </>
    </div>
  );
};

export default ChineseCourses;
