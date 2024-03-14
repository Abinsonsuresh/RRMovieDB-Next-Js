import React from 'react'
import { useSelector } from 'react-redux'

const GenresBlock = ({data}) => {
    const {genres} = useSelector((state)=> state.home)
  return (
    <>
    <div>
        {data?.map((id)=>{
            // console.log("ids",id)
            if(!genres[id]?.name) return;
            return(
                <div className='' key={id}>
                    <div className='text-sm text-gray-500'>
                    {genres[id]?.name}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default GenresBlock