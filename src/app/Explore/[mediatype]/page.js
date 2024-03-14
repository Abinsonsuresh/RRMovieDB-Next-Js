import React from 'react'
import Explore from '@/Components/ExplorePage'
const page = ({params}) => {
  console.log(params.mediatype)
  return (
    <div className='mt-20'>
        <Explore mediaType={params.mediatype}/>
    </div>
  )
}

export default page  