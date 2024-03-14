import React from 'react'
import Explore from '@/Components/ExplorePage'
const page = ({params}) => {

  return (
    <div className='mt-20'>
        <Explore mediaType={params.mediatype}/>
    </div>
  )
}

export default page  