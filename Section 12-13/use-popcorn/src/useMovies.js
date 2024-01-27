import { useState, useEffect } from "react";
const key = "d95ca90";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();

      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Kuch to gadbad hai Daya !!");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Nahi mili movie");
          }
          setMovies(data.Search);
          setError("");
          // console.log(data.Search);
        } catch (err) {
          setError(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query, callback]
  );
  return { movies, isLoading, error };
}
