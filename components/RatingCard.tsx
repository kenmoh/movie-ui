import { MoviePropType } from "@/types";
import { CiStar } from "react-icons/ci";

const RatingCard = ({ title, length, average_rating }: MoviePropType) => {
    return (
        <div className="flex justify-between items-center mt-2">
            <div className="flex gap-5 items-center justify-center">
                <span>{title}</span>
                <span>{length} hrs</span>
            </div>
            <div className="flex gap-1 items-center justify-center">
                <span>{average_rating?.toFixed(1)}</span>
                <CiStar className="text-yellow-500" />
            </div>
        </div>
    );
};

export default RatingCard;
