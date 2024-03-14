
import React, { useEffect, useState } from 'react'
import UseFetchAPI from '@/utils/FetchAPICaller'
import Caraousel from '@/Components/Caraousel'

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie")


  const {data, loading} = UseFetchAPI(`/${endpoint}/top_rated`)
  console.log("TopRated:",data)
  return (
    <div>
      <>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold'>Top Rated Movies</h2>
      </div>
      <div>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
      </>
    </div>
  )
}

export default TopRated