
import React, { useEffect, useState } from 'react'
import useFetchAPI from '@/hooks/useFetchAPI'
import Caraousel from '@/Components/Caraousel'

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie")


  const {data, loading} = useFetchAPI(`/${endpoint}/top_rated`)
  console.log("TopRated:",data)
  return (
    <div>
      <>
      <div>
        <h2>TopRated Movies</h2>
      </div>
      <div>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
      </>
    </div>
  )
}

export default TopRated