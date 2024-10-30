import React from 'react'

export const Game = ({ item }) => {
  return (
    <div>
      <p>{item.external}</p>
      <div className="max-w-sm rounded overflow-hidden shadow-lg px-4">
        <img className="w-64" src={item.thumb} alt={item.thumb} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">Cheapest Price: {item.cheapest}€</div>    
        </div>
      </div>
    </div>
  )
}
