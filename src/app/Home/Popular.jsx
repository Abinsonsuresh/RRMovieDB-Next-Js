import React, { useEffect, useState } from 'react'
import UseFetchAPI from '@/hooks/UseFetchAPI'
import Caraousel from '@/Components/Caraousel'

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie")


  const {data, loading} = UseFetchAPI(`/${endpoint}/popular`)
  console.log("Trending:",data)
  return (
    <div>
      <>
      <div>
        <h2>Populaar Movies</h2>
      </div>
      <div>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
      </>
    </div>
  )
}

export default Popular