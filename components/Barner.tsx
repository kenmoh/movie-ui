import React from 'react'
import SearchForm from './SearchForm'

const Barner = () => {
  return (
    <div className='h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 mt-[64px]'>
        <h1 className='font-bold text-4xl text-white'>Welcome.</h1>
        <h1 className='text-2xl text-white'>Review your favorite Movies and TV shows.</h1>
        <SearchForm/>
    </div>
  )
}

export default Barner