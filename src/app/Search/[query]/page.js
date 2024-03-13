'use client'
import Caraousel from '@/Components/Caraousel';
import MovieCard from '@/Components/MovieCard';
import { APIData } from '@/utils/api';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [data, SetData] = useState(null);
    const [pageNum, SetPageNum] = useState(1);
    const [loading, SetLoading] = useState(false);
    console.log(pageNum)

    const FetchSearchData = () => {
        APIData(`/search/multi?query=${params.query}&page=${pageNum}`).then(
            (res) => {
                SetData(res)
                // setPageNum((prev) => prev + 1);
                console.log(res)
                SetLoading(false)
            }
        )
    }

    const NextPage = () => {
        APIData(`/search/multi?query=${params.query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    SetData({ ...data, results: [...data?.results, ...res?.results] })
                }
                else {
                    SetData(res)
                }
                // setPageNum((prev) => prev + 1);
                console.log(res)

            }
        )
    }

    useEffect(() => {
        SetPageNum(1)
        FetchSearchData()
    }, [params.query])

    return (
        <div className='flex justify-center items-center flex-wrap gap-5'>

            {
                data?.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (
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