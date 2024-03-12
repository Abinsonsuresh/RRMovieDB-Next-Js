'use client'
import HeroBanner from "./HeroBanner"
import Popular from "./Popular"
import TopRated from "./TopRated"
import Trending from "./Trending"

const MainHome = () => {
  return (
   <div>
       <HeroBanner/>
       <Trending/>
       <Popular/>
       <TopRated/>

   </div>
       

  )
}

export default MainHome