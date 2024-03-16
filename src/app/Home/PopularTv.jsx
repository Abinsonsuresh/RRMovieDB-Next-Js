import React, { useEffect, useState } from 'react'
import UseFetchAPI from '@/utils/FetchAPICaller'
import Caraousel from '@/Components/Caraousel'

const PopularTv = () => {
  const [endpoint, setEndpoint] = useState("tv")


  const {data, loading} = UseFetchAPI(`/${endpoint}/popular`)
  
  return (
    <div>
      <>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold'>Popular TV Shows</h2>
      </div>
      <div>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
      </>
    </div>
  )
}

export default PopularTv