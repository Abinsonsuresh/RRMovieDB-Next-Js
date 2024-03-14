import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdAddToPhotos } from 'react-icons/md';
import { useSelector } from 'react-redux';
import GenresBlock from './GenresBlock';

const MovieCard = ({ data, endpoint }) => {
    console.log("SXPLORE", data.genre_ids.slice(0, 1))
    const { url } = useSelector((state) => state.home)
    const router = useRouter()
    const Type_t = endpoint?.charAt(0)?.toUpperCase() + endpoint?.slice(1) || "";
    const Type = (data?.media_type?.charAt(0)?.toUpperCase() + data?.media_type?.slice(1)) || '';
    const posterUrl = data.poster_path ? "https://image.tmdb.org/t/p/original" + data.poster_path : "https://user-images.githubusercontent.com/841956/92777123-2c31ce80-f3a0-11ea-86b1-fbc03d1f7ce0.png";

    return (



        <div onClick={() => router.push(`/Details/${data.media_type || endpoint}/${data.id}`)} className='bg-primary relative shadow-2xl border border-secondary rounded-lg min-w-44 max-h-[400px] min-h-[400px] max-w-44  cursor-pointer hover:scale-105 ease-in-out duration-300' >


            <div className='absolute bg-[#424242c3] rounded-sm top-0 right-0 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                <MdAddToPhotos size={20} color='white' />
            </div>


            <div className='flex justify-center items-start flex-col'>
                <div>
                    <Image className='w-44 object-fill rounded-lg ' width={200} height={200} src={posterUrl} alt="" />
                </div>
                <div className='text-primary p-2'>
                    <p className='font-bold '>{data?.title || data?.name}</p>
                    <p className='text-gray-500'>{Type || Type_t}</p>
                    <div className='flex'>
                    <GenresBlock data={data?.genre_ids.slice(0, 1)} />
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MovieCard