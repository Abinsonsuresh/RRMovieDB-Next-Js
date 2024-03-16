import Image from 'next/image'
import React from 'react'

const Cast = ({ data, loading }) => {
    console.log(data)
    return (
        <div className=''>
            <h2 className='text-2xl font-bold'>Cast</h2>
            <div>
            <Image src={"https://image.tmdb.org/t/p/original" + data?.profile_path }  className='object-cover rounded-full opacity-15 ' width={200} height={100} alt="" />
            </div>
        </div>
    )
}

export default Cast