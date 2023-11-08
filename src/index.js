import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating defaultRating={1} /> <br />
    <StarRating
      color="blue"
      size={43}
      className="test"
      messages={["bad", "okay", "good", "very good", "excellent"]}
      defaultRating={3}
    />
  </React.StrictMode>
);
