import { useState, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "5d037153ef6ce7d47b77f819f0384ffa";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      //process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
      //const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      const { results } = await (await fetch("/api/movies")).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      API_KEY
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
