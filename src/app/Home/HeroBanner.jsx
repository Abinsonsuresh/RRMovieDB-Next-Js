'use client'
import React, { useEffect, useState } from 'react'

import useFetchAPI from '@/hooks/useFetchAPI'
import { useSelector } from "react-redux"

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    console.log(query)


    const { url } = useSelector((state) => state.home) //imgurl inside the home slice

    const { data, loading } = useFetchAPI("/trending/all/day")
    
    console.log(data)

    const SearchHandler = (e) => {
        if (e.key == "Enter" && query.length > 0) {
            // navigate(`/search/${query}`)
        }
    }
    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
        setBackground(bg)
    }, [data])
    return (
        <>
            <div className='w-full h-[450px] md:h-[700px] flex items-center relative'>
                
                <div className="bgimg w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden">
                    <img className='w-full h-full object-cover object-center' src={background} alt="" />
                    {/* <LazyLoad className="w-full h-full" src={background} /> */}
                </div>

                <div className="op w-full h-[250px]  absolute bottom-0 left-0">

                </div>

                <div className="searchIP relative flex flex-col max-w-[700px] items-center m-0 mx-auto">
                    <div>
                        <p className='text-4xl font-bold text-white'>Explore the World of Movies</p>
                    </div>
                    <div className=''>
                        <input
                            type="text"
                            placeholder='Search Movies or TV Shows'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={SearchHandler}
                            className='p-2 border rounded'
                        />
                        <button className='px-4 py-2 bg-blue-500 text-white ml-2'>Search</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroBanner 