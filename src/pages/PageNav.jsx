import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../Components.jsx/AppLayout'
import { Deals } from '../Components.jsx/Deals'
import { GameList } from '../Components.jsx/GameList'

export const PageNav = () => {
    const [data, setData] = useState([])
    const [gameData, setGameData] = useState([])
    const [input, setInput] = useState("")

    return (
        <BrowserRouter>
            <AppLayout setInput={setInput}/>
            <Routes>
                <Route index element={<Deals setData={setData} data={data} />} />
                <Route path="/games" element={<GameList setGameData={setGameData} gameData={gameData} input={input}/>} />
            </Routes>
        </BrowserRouter>
    )
}
