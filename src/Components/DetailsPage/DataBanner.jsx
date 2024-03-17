import React from 'react'
import UseFetchAPI from '@/utils/FetchAPICaller';
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs'
import { MdStar } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import VideoCard from './VideoCard';



const DataBanner = ({ videos, credits, mediaType, id }) => {

    const { data, loading } = UseFetchAPI(`/${mediaType}/${id}`)
    const { url } = useSelector((state) => state.home)
    const { genres } = useSelector((state) => state.home)
    const genresAPIData = data?.genres?.map((g, i) => g.id);
    console.log(credits)


    const rating = data?.vote_average.toFixed(1) / 2;

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    // origin_country revenue budget
    const director = credits?.filter((item) => item?.job === "Director")
    const Producer = credits?.filter((item) => item?.job === "Producer")
    const EXProducer = credits?.filter((item) => item?.job === "Executive Producer")

    console.log(data)

    const writer = credits?.filter((item) => item?.job === "Screenplay" || item?.job === "Story" || item?.job === "Writer")
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            {
                !loading ? (
                    <>
                        {/* //!! means true */}
                        {!!data && (<React.Fragment>
                            <div className='relative '>
                                <div className=' absolute -z-10 '>
                                    <Image src={"https://image.tmdb.org/t/p/original" + data.backdrop_path} className='object-cover  opacity-15 ' width={2000} height={1000} alt="" />
                                    <span className="op w-full h-[250px]  absolute bottom-0 left-0 "></span>
                                </div>




                                <div className='flex flex-col lg:flex-row justify-between items-center p-6  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 pt-16 mt-8'>



                                    <div className='shadow-2xl  rounded-lg flex justify-center items-center '>
                                        {
                                            data.poster_path ? (<Image className='max-w-[350px] rounded-xl' width={400} height={400} src={"https://image.tmdb.org/t/p/original" + data?.poster_path} alt="" />) : (<div>
                                                <Skeleton variant="rectangular" animation="wave" width={350} />
                                            </div>)
                                        }

                                    </div>



                                    <div className='md:px-6'>
                                        <div className='my-6 md:my-0 text-start'>
                                            <p className='text-3xl font-bold'>{data.original_title || data.title || data.name}  {dayjs(data?.release_date).format("YYYY")}</p>
                                            <p className='text-md md:text-xl font-thin italic'>{data?.tagline}</p>
                                        </div>

                                        <div className='flex gap-3 my-4'>
                                            {
                                                genresAPIData.map((id, index) => {
                                                    if (!genres[id]?.name) return
                                                    return (
                                                        <span className='flex bg-orange-400 px-2 rounded-md font-semibold' key={index}>{genres[id].name}</span>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className='flex justify-normal items-center my-6'>



                                            <Box className="flex justify-center items-center gap-5 font-bold" sx={{ '& > legend': { mt: 2 }, }}>

                                                <Rating className='' name="disabled" value={rating} precision={0.1} disabled size="large" style={{ opacity: 100 }} />
                                                <p>{rating}/5</p>
                                            </Box>

                                        </div>



                                        <div className='my-4 '>
                                            <p className='text-2xl font-semibold'>Overview</p>
                                            <p className='text-sm md:text-lg mt-4 '>{data.overview}</p>
                                        </div>


                                        <div className="grid md:grid-cols-3 md:p-4 gap-5 border-b border-[#a0a0a01b]">


                                            <div className=''>
                                                {
                                                    data.status && (<> <div className='flex items-center space-x-2'>
                                                        <span className='text-lg font-semibold'>Status: </span>
                                                        <p className='text-lg font-semibold text-gray-500'>{data.status}</p>

                                                    </div> </>)
                                                }
                                            </div>



                                            <div>
                                                {
                                                    data.release_date && (<> <div className='flex items-center space-x-2'>
                                                        <span className='text-lg font-semibold'>Release Date:</span>
                                                        <p className='text-lg font-semibold text-gray-500'> {dayjs(data.release_date).format("MMM D,YYYY")}</p>
                                                    </div> </>)
                                                }
                                            </div>



                                            <div>
                                                {
                                                    data.runtime && (<> <div className='flex items-center space-x-2'>
                                                        <span className='text-lg font-semibold'>Runtime: </span>
                                                        <p className='text-lg font-semibold text-gray-500'>{toHoursAndMinutes(data.runtime)}</p>
                                                    </div> </>)
                                                }
                                            </div>

                                        </div>


                                        <div className="grid md:grid-cols-3 md:p-4 gap-5 mt-4 border-b border-[#a0a0a01b]">

                                            <div>
                                                {
                                                    data?.spoken_languages && (<>
                                                        <span className='text-lg font-semibold'>Language:</span>
                                                        {
                                                            data?.spoken_languages.map((item, index) => (
                                                                <div key={index} className=''>
                                                                    <p className='text-lg font-semibold  text-gray-500'> {item?.english_name}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </>)
                                                }
                                            </div>


                                            <div>
                                                <span className='text-lg font-semibold'>Revenue:</span>

                                                {
                                                    data?.revenue ? (<> <div>
                                                        <p className='text-lg font-semibold text-gray-500'>{data?.revenue === 0 ? "undisclosed" : USDollar.format(data?.revenue)}</p>
                                                    </div> </>) : (<div>
                                                        <p className='text-lg font-semibold text-gray-500'>undisclosed</p>
                                                    </div>)
                                                }
                                            </div>

                                            <div>
                                                <span className='text-lg font-semibold'>Budget:</span>

                                                {
                                                    data?.budget ? (<> <div>
                                                        <p className='text-lg font-semibold text-gray-500'>{USDollar.format(data?.budget)}</p>
                                                    </div> </>) : (<> <div>
                                                        <p className='text-lg font-semibold text-gray-500'>undisclosed</p>
                                                    </div> </>)
                                                }
                                            </div>


                                        </div>

                                        <div className="grid md:grid-cols-3 md:p-4 gap-5 mt-4 border-b border-[#a0a0a01b]">

                                            <div>
                                                {
                                                    director?.length > 0 && (<div> {director?.map((Ddata, index) => (
                                                        <div key={index}>
                                                        <span className='text-lg font-semibold'>Director: </span>

                                                            <p className='text-sm font-semibold text-gray-500' >{Ddata?.name} {director?.length -
                                                                1 !== index && ", "}</p>
                                                        </div>
                                                    ))} </div>)
                                                }
                                            </div>

                                            <div>
                                                {
                                                    Producer && (<div>
                                                        <span className='text-lg font-semibold'>Producer: </span>

                                                        <p className='text-sm font-semibold text-gray-500' >{Producer[0]?.name}</p>

                                                    </div>)
                                                }
                                            </div>


                                            <div>
                                                {
                                                    EXProducer && (<div>
                                                        <span className='text-lg font-semibold'>Ex-Producer: </span>

                                                        <p className='text-sm font-semibold text-gray-500' >{EXProducer[0]?.name}</p>

                                                    </div>)
                                                }
                                            </div>



                                        </div>

                                        {/* PRODUCTION COMPANIES */}

                                        <div>
                                            {
                                                data?.production_companies && (<>
                                                    <p className='text-lg font-semibold'>Production Companies:</p>
                                                    <div className='flex justify-start items-center gap-3'>
                                                        {
                                                            data?.production_companies.map((item, index) => {
                                                                return (
                                                                    <div className='flex gap-3' key={index}>
                                                                        <div>
                                                                            {item?.logo_path && <Image className=' p-2 w-24' width={100} height={100} src={"https://image.tmdb.org/t/p/original" + item?.logo_path} alt="" />}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </>)
                                            }
                                        </div>


                                        <div>




                                            {/* CREATORS */}

                                            {/* <div>
                                                {
                                                    data?.created_by?.length > 0 && (<div>
                                                        {data?.created_by?.map((Ddata, index) => (
                                                            <>
                                                                <div key={index}>

                                                                    <span>Creators:</span>
                                                                    <span >{Ddata?.name} {data?.created_by?.length -
                                                                        1 !== index && ", "}</span>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>)
                                                }
                                            </div> */}
                                        </div>


                                    </div>



                                </div>
                            </div>
                        </React.Fragment>)}
                    </>
                ) : (<div>Loading</div>)
            }
        </>
    )
}

export default DataBanner