import React from 'react'

const CastCard = ({ cast }: { cast: string }) => {
    return (

        <span className='bg-gray-800 text-white rounded-full py-2 px-3'> {cast}</span>

    )
}

export default CastCard