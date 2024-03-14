import React, { useEffect, useState } from 'react'
import UseFetchAPI from '@/utils/FetchAPICaller'
import Caraousel from '@/Components/Caraousel'

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day")


  const {data, loading} = UseFetchAPI(`/trending/all/${endpoint}`)
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