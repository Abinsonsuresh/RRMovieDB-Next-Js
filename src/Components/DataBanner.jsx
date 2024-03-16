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


    const director = credits?.filter((item) => item?.job === "Director")
    // const actors = credits?.filter((item) => item?.job === "Casting")
    // console.log(actors)

    const writer = credits?.filter((item) => item?.job === "Screenplay" || item?.job === "Story" || item?.job === "Writer")


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
                                            data.poster_path ? (<Image className='max-w-[350px] rounded-xl' width={400} height={400} src={"https://image.tmdb.org/t/p/original" + data?.poster_path} alt="" />) : (<div>load</div>)
                                        }

                                    </div>



                                    <div className='md:px-6'>
                                        <div className='my-6 md:my-0 text-start'>
                                            <p className='text-3xl font-bold'>{data.original_title || data.title || data.name}  {dayjs(data?.release_date).format("YYYY")}</p>
                                            <p className='text-md md:text-xl font-thin italic'>{data?.tagline}</p>
                                        </div>

                                        <div className='flex gap-3 '>
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

                                                <Rating className='' name="disabled" value={rating} precision={0.5} disabled size="large" style={{ opacity: 100 }}   />
                                                <p>{rating}/5</p>
                                            </Box>

                                        </div>



                                        <div className='my-4 '>
                                            <p className='text-2xl font-semibold'>Overview</p>
                                            <p className='text-lg mt-4 '>{data.overview}</p>
                                        </div>




                                        <div>
                                            {
                                                data.status && (<> <div>
                                                    <p>Status: {data.status}</p>

                                                </div> </>)
                                            }
                                        </div>

                                        <div>
                                            {
                                                data.release_date && (<> <div>
                                                    <p>Release Date: {dayjs(data.release_date).format("MMM D,YYYY")}</p>
                                                </div> </>)
                                            }
                                        </div>

                                        <div>
                                            {
                                                data.runtime && (<> <div>
                                                    <p>Runtime: {toHoursAndMinutes(data.runtime)}</p>
                                                </div> </>)
                                            }
                                        </div>

                                        <div>
                                            <div>
                                                {
                                                    director?.length > 0 && (<div> {director?.map((Ddata, index) => (
                                                        <div key={index}>
                                                            <span >Director: {Ddata?.name} {director?.length -
                                                                1 !== index && ", "}</span>
                                                        </div>
                                                    ))} </div>)
                                                }
                                            </div>


                                            <div>
                                                {
                                                    writer?.length > 0 && (<div>
                                                        <span>writers:</span>
                                                        {writer?.map((Ddata, index) => (
                                                            <>
                                                                <div key={index}>
                                                                    <span >{Ddata?.name}{writer?.length -
                                                                        1 !== index && ", "}</span>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>)
                                                }
                                            </div>



                                            <div>
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
                                            </div>
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