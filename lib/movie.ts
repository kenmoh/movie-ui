"use server";

import { revalidatePath } from "next/cache";

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
    console.log(error);
  }
};

export const getMovieDetail = async (movie_id: number) => {
  try {
    const res = await fetch(`${movie_detail_url}/${movie_id}`, options);
    const movie = await res.json();
    return movie;
  } catch (error) {
    console.log(error);
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

// Add review
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

  try {
    await fetch(`https://reviewapi.onrender.com/api/reviews/${movie_id}`, {
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
    });
    // If the fetch is successful, return a success message

    return {
      type: "success",
      message: "Review added successfully!",
    };
  } catch (error) {
    // If the fetch is unsuccessful, return an error message
    return {
      type: "error",
      message: "You can only review once!",
    };
  } finally {
    // Revalidate the page after the fetch is complete
    revalidatePath(`/movies/${movie_id}`);
  }
}

export const getMovieReviews = async (id: number) => {
  try {
    const res = await fetch(`${review_url}/${id}`);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getMovieAverageRating = async (id: number) => {
  try {
    const data = await fetch(`${review_url}/average-rating/${id}`);
    return data;
  } catch (error) {
    return { error };
  }
};