import { useState, useEffect } from "react";
import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
//const API_KEY = "5d037153ef6ce7d47b77f819f0384ffa";
export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/movies");
      const { results } = await res.json();
      setMovies(results);
    })();
  }, []);
  //function onClick((id) => router.push(`/movie/${id}`));
  const onClick = (id, title) => {
    //router.push({ pathname: `/movies/${id}`, query: { title } }, `/movies/${id}`);
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={{ pathname: `/movies/${movie.id}`, query: movie.original_title }} as={`/movies/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
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
