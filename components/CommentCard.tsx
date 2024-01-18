import { ReviewProps } from "@/types";
import { CiStar } from "react-icons/ci";

const CommentCard = ({ author, comment, rating, created_at }: ReviewProps) => {
  return (
    <div className="border-[1px] p-5 rounded-md border-gray-800 my-5">
      <div className="flex gap-10 items-center justify-between mb-4">
        <div className="flex gap-5 items-center">
          <span className="font-light">{author}</span>
          <div className="flex gap-1 items-center">
            <span className="font-light text-sm">{rating}</span>
            <CiStar />
          </div>
        </div>
        <div>
          <span className="font-thin text-sm">{created_at}</span>
        </div>
      </div>
      <p className="font-thin text-base">{comment}</p>
    </div>
  );
};

export default CommentCard;
