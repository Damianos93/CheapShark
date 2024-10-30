import React from 'react'
import { NavBar } from './NavBar'

export const AppLayout = ({setInput}) => {
    return (
        <div className='mb-10'>
            <NavBar setInput={setInput}/>
        </div>
    )
}
