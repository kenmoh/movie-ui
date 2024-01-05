"use client"
import { toast } from "react-toastify";
import { useFormState } from "react-dom"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { addComment } from "@/lib/movie"
import AppButton from "./AppButton";;

type MovieId = {
    movie_id: number
}
const Form = ({ movie_id }: MovieId) => {
    const [state, formAction] = useFormState(addComment, null)


    if (state?.type === 'success') {
        toast.success(state.message, { position: 'top-right' })
    }

    if (state?.type === 'error') {
        toast.error(state.message, { position: 'top-right' })
    }


    return (
        <form className="mb-10" action={formAction}>
            <div className="md:flex gap-5 mt-5 mb-5">
                <Input type="hidden" value={movie_id} name="movie_id" />
                <Input className="mb-4" type="number" placeholder="Enter rating" name="rating" max='5' min='1' />
                <Input type="text" placeholder="Full Name" name="author" />
            </div>
            <Textarea placeholder="Content" name="comment" />
            <AppButton />
        </form>
    )
}

export default Form