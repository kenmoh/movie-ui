"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { getMovies } from "@/lib/movie";
import Link from "next/link";
import { MovieProp } from "@/types";
import MovieCard from "./MovieCard";

let page = 1;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [movies, setMovies] = useState<MovieProp[]>([]);

  useEffect(() => {
    if (inView) {
      getMovies(page).then((res) => {
        setMovies([...movies, ...res]);
        page++;
      });
    }
  }, [inView, movies]);
  return (
    <>
      <section className="p-3  flex flex-wrap gap-5 justify-center items-center mt-5 w-full">
        {movies.map((move) => (
          <Link
            href={`/movies/${move.id}`}
            key={move.id}
            className="hover:scale-105 duration-100"
          >
            <MovieCard
              poster_path={move.poster_path}
              average_rating={move.id}
              title={move.title}
            />
          </Link>
        ))}
      </section>
      <section className="flex justify-center mt-4">
        <div ref={ref}>
          <Image src="/spinner.gif" alt="spinner" width={56} height={56} />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
