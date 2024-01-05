'use client'
import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"



const AppButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} className="mt-5">
            {pending ? 'Submitting...' : 'Submit'}
        </Button>
    )
}

export default AppButton