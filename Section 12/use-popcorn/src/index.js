import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./StarRating";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie has {movieRating} stars</p>
//     </>
//   );
// }
root.render(
  <React.StrictMode>
    {
      <App />
      // <>
      //   <StarRating
      //     maxRating={5}
      //     messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      //     defaultRating={3}
      //   />
      //   <StarRating size={24} color="red" className="test" defaultRating={3} />
      //   <Test />
      // </>
    }
  </React.StrictMode>
);
