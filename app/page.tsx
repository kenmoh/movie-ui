
import { MovieProp } from '@/types'
import MovieCard from '@/components/MovieCard'
import Link from 'next/link'
import { getMovies, searchMovie } from '@/lib/movie'
import AppButton from '@/components/AppButton'
import LoadMore from '@/components/LoadMore'
import Barner from '@/components/Barner'

export default async function Home() {

  const movies: MovieProp[] = await getMovies(1)
  const movie: MovieProp = await searchMovie('fast x')
  console.log(movie)

  return (

    <>
      {/* 
      <main className="flex flex-wrap gap-5 justify-center items-center mt-5 w-full">

        {

          movies.map(async (move) => (
            <Link href={`/movies/${move.id}`} key={move.id} className='hover:scale-105 duration-100'>
              <MovieCard poster_path={move.poster_path} average_rating={move.id} title={move.title} />
            </Link>
          ))
        }
      </main> */}
      <Barner/>
      <LoadMore />
    </>

  )
}
