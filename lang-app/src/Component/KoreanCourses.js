import React from "react";
import Button from "react-bootstrap/Button";

const KoreanCourses = () => {
  return (
    <div className="App">
      <h1>Learn Korean</h1>
      <p>Choose a level</p>
      <>
        <Button variant="outline-danger">KOREAN LEVEL 1</Button>{" "}
        <Button variant="outline-danger">KOREAN LEVEL 2</Button>{" "}
        <Button variant="outline-danger">KOREAN LEVEL 3</Button>{" "}
      </>
    </div>
  );
};

export default KoreanCourses;
