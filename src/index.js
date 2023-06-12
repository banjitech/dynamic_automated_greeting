import React from "react";
import ReactDOM from "react-dom";

var greeting;

var currentTime = new Date().getHours();

var timeColor = { color: "" };

if (currentTime < 12) {
  greeting = "Good Morning";
  timeColor.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  timeColor.color = "blue";
} else {
  greeting = "Goog evening";
  timeColor.color = "green";
}

ReactDOM.render(
  <h1 style={timeColor}>Hello {greeting} </h1>,
  document.getElementById("root")
);
