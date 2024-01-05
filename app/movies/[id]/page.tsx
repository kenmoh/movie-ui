import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MovieProp, ReviewProps } from "@/types";
import CastCard from "@/components/CastCard";
import RatingCard from "@/components/RatingCard";
import { getMovieAverageRating, getMovieCredit, getMovieDetail, getMovieReviews } from "@/lib/movie";
import Form from "@/components/Form";
import { CiStar } from "react-icons/ci";

type IdParams = {
    id: number;
};
type Credit = {
    known_for_department: string;
    name: string
};
const movieDetails = async ({ params }: { params: IdParams }) => {
    const movie: MovieProp = await getMovieDetail(params.id);
    const movieCredits = await getMovieCredit(params.id)
    const reviews: ReviewProps[] = await getMovieReviews(params.id)
    const { average_rating } = await getMovieAverageRating(params.id)




    return (
        <div className="mx-auto w-3/5 mt-[72px]">
            <div className="relative h-[500px] w-full rounded-md">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover object-center overflow-hidden"
                />
            </div>
            <RatingCard
                title={movie.title}
                average_rating={average_rating!}
                length={movie.id}
            />
            <h1 className="text-xl uppercase mt-10 bold">Cast</h1>


            <div className="flex flex-wrap gap-3 my-2">

                {
                    movieCredits.cast.slice(0, 11).map((credit: Credit) => (
                        credit.known_for_department === 'Acting' &&
                        <CastCard key={credit.name} cast={credit.name} />
                    ))
                }

            </div>
            {
                reviews.map(review => (
                    <Card className="mb-5" key={review.id}>
                        <CardHeader>
                            <div className="flex gap-5">
                                <CardTitle className="text-sm">{review.author} </CardTitle>
                                <div className="flex items-center">
                                    <span className="font-light text-sm">{review.rating}</span>
                                    <CiStar className="text-yellow-500" />
                                </div>
                            </div>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{review.comment}</CardDescription>
                        </CardContent>
                    </Card>
                ))
            }


            <Form movie_id={movie.id} />

        </div>
    );
};

export default movieDetails;
