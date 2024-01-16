export type MoviePropType = {
  title: string;
  length?: number;
  description?: string;
  casts?: string;
  genre?: string;
  thriller?: string;
  item_type?: string;
  id?: number;
  poster_path?: string;
  average_rating?: number;
  created_at?: string;
  reviews?: [];
  index?: number;
};

export type ReviewProps = {
  author: string;
  comment: string;
  rating: number;
  id?: number;
  created_at?: string;
};

export type GenreProp = {
  genre_id: number;
};

export type MovieProp = {
  backdrop_path?: string;
  genre_ids: GenreProp[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title: string;
  runtime: number;
};
