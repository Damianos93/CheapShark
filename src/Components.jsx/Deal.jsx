import React from 'react'

export const Deal = ({ item }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg px-4">
            <img className="w-64" src={item.thumb} alt={item.thumb} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">{item.title}</div>
                <p className='text-sm bg-gray-200 rounded-full px-3 py-1  w-28 center font-bold '>Price: {Number(item.salePrice) === 0 ? "Free" : `${item.salePrice}€`}</p>
                <p className='text-sm '>Normal Price: {item.normalPrice}€</p>
                <p className=" ">Savings: {Number(item.savings).toFixed(2)}% </p>
                <p className=" ">Release Date: {new Date(Number(item.releaseDate) * 1000).toUTCString().slice(5, 16)} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {item.steamRatingPercent && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Steam Rating: {item.steamRatingPercent}</span>}
                {item.steamRatingText && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.steamRatingText}</span>}
                {item.steamRatingCount && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Steam rating count: {item.steamRatingCount}</span>}
            </div>
        </div>
    )
}
