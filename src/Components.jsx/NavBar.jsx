import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({setInput}) => {
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <nav className='decoration-clone  shadow-2xl bg-gradient-to-r from-zinc-900 to-slate-600 rounded font-serif px-4'>
            <h1 className='text-2xl text-red-600 top-0  mb-10 pt-7'>Cheap Shark Gaming 🦈🕹️</h1>
            <div className='flex justify-between'>
                <Link to="/" className='text-lg text-red-600'>Home</Link>
                <Link to="/games" className='text-lg text-red-600'>All Games</Link>
                <Link to="/" className='text-lg text-red-600'>Deals Of The Week</Link>
            </div>
            <input className='h-2 w-64 p-6 mt-6 mb-4' type="text" placeholder='Search For Games' onChange={handleChange} />
        </nav>
    )
}
