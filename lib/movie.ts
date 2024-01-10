"use server";

import { revalidatePath } from "next/cache";

const searchUrl = "https://api.themoviedb.org/3/search/movie";
const review_url = "https://reviewapi.onrender.com/api/reviews";
const movie_detail_url = "https://api.themoviedb.org/3/movie/";
const url = "https://api.themoviedb.org/3/discover/movie";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

export const getMovies = async (page: number) => {
  try {
    const res = await fetch(`${url}?page=${page}`, options);
    const movies = await res.json();
    return movies.results;
  } catch (error) {
    return { error };
  }
};

export const getMovieDetail = async (movie_id: number) => {
  try {
    const res = await fetch(`${movie_detail_url}/${movie_id}`, options);
    const movie = await res.json();
    return movie;
  } catch (error) {
    return { error };
  }
};
export const getMovieCredit = async (movie_id: number) => {
  try {
    const res = await fetch(`${movie_detail_url}/${movie_id}/credits`, options);
    const movieCredits = await res.json();
    return movieCredits;
  } catch (error) {
    console.log(error);
  }
};
export const getNextPage = async (pageNumber: number) => {
  await fetch(`${movie_detail_url}/?page=${pageNumber}`, options);
};

export async function addComment(prevData: any, data: FormData) {
  const author = data.get("author");
  const comment = data.get("comment");
  const rating = data.get("rating");
  const movie_id = data.get("movie_id");

  if (!author || !comment || !rating || !movie_id) {
    return {
      type: "error",
      message: "All fields are required!",
    };
  }

  const res = await fetch(
    `https://reviewapi.onrender.com/api/reviews/${movie_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id,
        author,
        comment,
        rating,
      }),
    }
  );
  if (res.status === 201) {
    return {
      type: "success",
      message: "Review added successfully.",
    };
  }
  if (res.status === 400) {
    return {
      type: "error",
      message: "You already reviewed this movie.",
    };
  }
}

// Add review
// export async function addComment(prevData: any, data: FormData) {
//   const author = data.get("author");
//   const comment = data.get("comment");
//   const rating = data.get("rating");
//   const movie_id = data.get("movie_id");

//   if (!author || !comment || !rating || !movie_id) {
//     return {
//       type: "error",
//       message: "All fields are required!",
//     };
//   }

//   try {
//     const res = await fetch(
//       `https://reviewapi.onrender.com/api/reviews/${movie_id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           movie_id,
//           author,
//           comment,
//           rating,
//         }),
//       }
//     );
//     // If the fetch is successful, return a success message
//     return {
//       type: "success",
//       message: "Review added successfully!",
//     };
//   } catch (error) {
//     // If the fetch is unsuccessful, return an error message
//     console.log(error);
//     return {
//       type: "error",
//       message: "You can only review once!",
//       error,
//     };
//   } finally {
//     // Revalidate the page after the fetch is complete
//     revalidatePath(`/movies/${movie_id}`);
//   }
// }

export const getMovieReviews = async (id: number) => {
  try {
    const res = await fetch(`${review_url}/${id}`);
    const data = res.json();
    return data;
  } catch (error) {
    return {
      error,
    };
  }
};

export const getMovieAverageRating = async (id: number) => {
  try {
    const res = await fetch(`${review_url}/average-rating/${id}`);
    const rating = await res.json();
    return rating;
  } catch (error) {
    return { error };
  }
};

export const searchMovie = async (title: string) => {
  try {
    const res = await fetch(`${searchUrl}?query=${title}`, options);
    const movie = res.json();

    return movie;
  } catch (error) {
    return { error };
  }
};
