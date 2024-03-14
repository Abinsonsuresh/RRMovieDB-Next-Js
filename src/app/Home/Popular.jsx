import React, { useEffect, useState } from 'react'
import UseFetchAPI from '@/utils/FetchAPICaller'
import Caraousel from '@/Components/Caraousel'

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie")


  const {data, loading} = UseFetchAPI(`/${endpoint}/popular`)
  console.log("Trending:",data)
  return (
    <div>
      <>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold'>Populaar Movies</h2>
      </div>
      <div>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
      </>
    </div>
  )
}

export default Popular