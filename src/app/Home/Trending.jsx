import React, { useEffect, useState } from 'react'
import useFetchAPI from '@/hooks/useFetchAPI'
import Caraousel from '@/Components/Caraousel'

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day")


  const {data, loading} = useFetchAPI(`/trending/all/${endpoint}`)
  console.log("Trending:",data)
  return (
   
      <>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold'>Trending today</h2> 
      </div>
      <div className=''>
        <Caraousel data={data?.results} loading={loading}/>
      </div>
      </>
   
  )
}

export default Trending