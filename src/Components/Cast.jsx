import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

const Cast = ({ data, loading }) => {

    const CastContainer = useRef()



    const router = useRouter()
    const CarouselNaviagtion = (dir) => {
        const container = CastContainer.current;

        const scrollAmount =
            dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    console.log("CAST",data)
    return (
        <div className=''>
            <h2 className='text-2xl font-bold'>Cast</h2>
            <div className=''>
           

{
                !loading ? (<>
                    <div className='relative  '>
                        <div className='absolute top-[50%] right-0  bg-[#424242c3] p-3 rounded-full z-50' onClick={() => CarouselNaviagtion("right")}>
                            <MdOutlineNavigateNext color='white' size={20} />
                        </div>

                        <div className='absolute top-[50%] left-0 bg-[#424242c3] p-3 rounded-full z-50' onClick={() => CarouselNaviagtion("left")}>
                            <MdOutlineNavigateBefore color='white' size={20} />
                        </div>


                        <div ref={CastContainer} className='w-full h-[450px]   overflow-x-scroll scroll  scroll-smooth  no-scrollbar flex items-center gap-3'>

                        {
                    data?.map((item,index)=>{
                        return(
                            <div key={index} className='flex gap-5 flex-col'>
                                <Image src={"https://image.tmdb.org/t/p/original" + item?.profile_path }  className='object-cover object-center max-w-44 rounded-full ' width={125} height={125} alt="" />
                                <p>{item?.name}</p>
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

            </div>
        </div>
    )
}

export default Cast