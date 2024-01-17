"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { getMovies, searchMovie } from "@/lib/movie";
import Link from "next/link";
import { MovieProp } from "@/types";
import MovieCard from "./MovieCard";
import { useSearchParams } from "next/navigation";

let page = 1;

const LoadMore = () => {
  const searchParams = useSearchParams()
  const searchTitle = searchParams.get('query')
  const { ref, inView } = useInView();
  const [movies, setMovies] = useState<MovieProp[]>([]);

  // console.log(movies)

  useEffect(() => {
    if (inView && !searchTitle) {
      getMovies(page).then((res) => {
        setMovies([...movies, ...res]);
        page++;
      });
    }

    if (searchTitle) {
      // Filter movies based on the search title and update the state
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      setMovies(filteredMovies);
    }

  }, [inView, movies, searchTitle]);
  return (
    <>
      <section className="flex flex-wrap gap-5 justify-center items-center mt-5 w-full">
        {movies.map((move: MovieProp, index: number) => (
          <Link
            href={`/movies/${move.id}`}
            key={move.id}
            className="hover:scale-105 duration-100"
          >
            <MovieCard
              poster_path={move.poster_path}
              average_rating={move.id}
              title={move.title}
              index={index}
            />
          </Link>
        ))}
      </section>
      <section className="flex justify-center mt-4">
        {!searchTitle && <div ref={ref}>
          <Image src="/spinner.gif" alt="spinner" width={56} height={56} />
        </div>
        }
      </section>
    </>
  );
};

export default LoadMore;
