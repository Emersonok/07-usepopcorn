import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import App from "./App2.js";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating defaultRating={1} /> <br />
    <StarRating
      color="blue"
      size={43}
      className="test"
      messages={["bad", "okay", "good", "very good", "excellent"]}
      defaultRating={3}
    />
    <StarRating
      color="blue"
      size={50}
      className="test"
      maxRating={10}
      messages={["1", "2", "3", "4", "5", "6", "7", "8", "now"]}
    /> */}
    <App />
  </React.StrictMode>
);
