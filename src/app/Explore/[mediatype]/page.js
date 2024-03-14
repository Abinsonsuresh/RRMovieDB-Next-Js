import React from 'react'
import Explore from '@/Components/ExplorePage'
const page = ({params}) => {
  return (
    <div>
        <Explore mediaType={params.mediaType}/>
    </div>
  )
}

export default page