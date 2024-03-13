'use client'
import { APIData } from '@/utils/api';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);

    const FetchSearchData =()=>{
        APIData(`/search/multi?query=${params.query}&page=${pageNum}`).then(
            (res)=>{
                setData(res)
                console.log(res)
            }
        )
    }

    useEffect(()=>{
        setPageNum(1)
        FetchSearchData()
    },[params.query])
    
  return (
    <div>page</div>
  )
}

export default page