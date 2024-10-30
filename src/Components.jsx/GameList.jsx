import React, { useEffect, useState } from 'react'
import { Game } from './Game'

export const GameList = ({ gameData, setGameData, input }) => {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${input}`)
        if (!response.ok) {
          throw new Error("Fetching did not work")
        }
        const dataRes = await response.json()
        setGameData(dataRes)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [input])
  return (
    <div className='grid grid-cols-4'>
      {gameData.map((item, index) => (
        <Game
          item={item}
          key={item.gameID}
        />
      ))}
    </div>
  )
}
