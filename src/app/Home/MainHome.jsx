'use client'
import HeroBanner from "./HeroBanner"
import Popular from "./Popular"
import TopRated from "./TopRated"
import Trending from "./Trending"

const MainHome = () => {
  return (
   <div>
       <HeroBanner/>
       <div className="p-2 md:p-6">
       <Trending/>
       <Popular/>
       <TopRated/>
       </div>

   </div>
       

  )
}

export default MainHome