import React, { useEffect } from 'react'
import { Deal } from './Deal'

export const Deals = ({ setData, data, }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.cheapshark.com/api/1.0/deals")
                if (!response.ok) {
                    throw new Error("Fetching did not work")
                }
                const dataRes = await response.json()
                setData(dataRes)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [setData])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6     overflow-y-auto '>
            {data?.slice(0,10).map((item, index) => (
                <Deal item={item} key={index}/>
            ))}
        </div>
    )
}
