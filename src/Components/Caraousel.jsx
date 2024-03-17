
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

// import GenresBlock from './GenresBlock'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore, MdStar, MdAddToPhotos } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import GenresBlock from './GenresBlock';
const Caraousel = ({ data, loading, endpoint }) => {

    const carouselContainer = useRef()



    const router = useRouter()
    const CarouselNaviagtion = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };


    return (
        <>
            {
                !loading ? (<>
                    <div className='relative  '>
                        <div className='absolute top-[50%] right-0  bg-[#424242c3] p-3 rounded-full z-50 cursor-pointer' onClick={() => CarouselNaviagtion("right")}>
                            <MdOutlineNavigateNext color='white' size={20} />
                        </div>

                        <div className='absolute top-[50%] left-0 bg-[#424242c3] p-3 rounded-full z-50 cursor-pointer' onClick={() => CarouselNaviagtion("left")}>
                            <MdOutlineNavigateBefore color='white' size={20} />
                        </div>


                        <div ref={carouselContainer} className='w-full h-[450px]   overflow-x-scroll scroll  scroll-smooth  no-scrollbar flex items-center gap-3'>


                            {
                                data?.map((item) => {
                                    // const posterUrl = item.poster_path ? url.poster + item.poster_path : "";
                                    const posterUrl = item.poster_path ? "https://image.tmdb.org/t/p/original" + item.poster_path : "";

                                    // const {media_type} = item;
                                    const Type_t = endpoint?.charAt(0)?.toUpperCase() + endpoint?.slice(1) || "";
                                    const Type = (item?.media_type?.charAt(0)?.toUpperCase() + item?.media_type?.slice(1)) || '';
                                    const rating = item.vote_average.toFixed(1)
                                    // console.log(Type)
                                    return (
                                        <div key={item.id} onClick={() => router.push(`/Details/${item.media_type || endpoint}/${item.id}`)} className='bg-primary relative shadow-md border border-secondary rounded-lg min-w-44 max-h-[400px] min-h-[400px]   cursor-pointer ' >

                                            <div className='circleRating absolute bottom-[7.5rem] shadow-2xl  right-0 bg-primary  rounded-full z-10 max-w-[50px]'>
                                                {
                                                    rating == 0.0 ? (<>  <MdStar color='orange' size={30} /> </>) : (<>
                                                        <div>
                                                            <CircularProgressbar
                                                                value={rating}
                                                                maxValue={10}
                                                                text={rating}
                                                                styles={buildStyles({
                                                                    pathColor:
                                                                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                                                                })} />

                                                        </div>
                                                    </>
                                                    )
                                                }


                                              
                                            </div>


                                            <div className='absolute bg-[#424242c3] rounded-sm top-0 right-0 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                                <MdAddToPhotos size={20} color='white' className='' />
                                            </div>


                                            <div className='flex justify-center items-start flex-col'>
                                                <div>
                                                    <Image className='max-w-44 object-cover rounded-lg' width={200} height={200} quality={75} loading = 'lazy'  src={posterUrl} alt="" />
                                                </div>
                                                <div className='text-primary p-2'>
                                                    <p className='font-bold '>{item?.title || item?.name}</p>
                                                    <p className='text-gray-500'>{Type || Type_t}</p>
                                                    <div className='flex'>
                                                        <GenresBlock data={item?.genre_ids.slice(0, 1)} />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>



                    </div>

                </>) : (<>
                    <div>loading</div>

                </>)
            }
        </>
    )
}

export default Caraousel