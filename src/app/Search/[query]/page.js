'use client'
import Caraousel from '@/Components/Caraousel';
import MovieCard from '@/Components/MovieCard';
import { APIData } from '@/utils/api';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    console.log(pageNum)

    const FetchSearchData =()=>{
        APIData(`/search/multi?query=${params.query}&page=${pageNum}`).then(
            (res)=>{
                setData(res)
                setPageNum((prev) => prev + 1);
                console.log(res)
                setLoading(false)
            }
        )
    }

    useEffect(()=>{
        setPageNum(1)
        FetchSearchData()
    },[params.query])
    
  return (
    <div className='flex justify-center items-center flex-wrap gap-5'>
     
        {
            data?.results.map((item,index)=>{
                if (item.media_type === "person") return;
                return(
                <div className='' key={index}>
                    <MovieCard data={item} />
                </div>

                )

            })
        }
    </div>
  )
}

export default page