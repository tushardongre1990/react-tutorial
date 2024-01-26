import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          // onCloseMovie();
          action?.();
          console.log("Closed Movie");
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [key, action]
  );
}
