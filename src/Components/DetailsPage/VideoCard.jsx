import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { FaRegPlayCircle } from "react-icons/fa";

const VideoCard = ({ data, loading }) => {

  const VideoContainer = useRef()



  const router = useRouter()
  const CarouselNaviagtion = (dir) => {
    const container = VideoContainer.current;

    const scrollAmount =
      dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  console.log("CAST", data)
  return (
    <div className='p-2'>


      {
        !loading ? (<>
          <div className='relative  '>
            <div className='absolute cursor-pointer top-[50%] right-0  bg-[#424242c3] p-3 rounded-full z-50' onClick={() => CarouselNaviagtion("right")}>
              <MdOutlineNavigateNext color='white' size={20} />
            </div>

            <div className='absolute cursor-pointer top-[50%] left-0 bg-[#424242c3] p-3 rounded-full z-50' onClick={() => CarouselNaviagtion("left")}>
              <MdOutlineNavigateBefore color='white' size={20} />
            </div>


            <div ref={VideoContainer} className='w-full max-h-[450px]   overflow-x-scroll scroll  scroll-smooth  no-scrollbar flex items-center gap-3'>

              {
                data?.map((item, index) => {
                  const img = `https://img.youtube.com/vi/${item.key}/mqdefault.jpg`;
                  return (
                    <div key={index} className='flex gap-5 flex-col relative w-44'>
                      <Image
                        src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                        className='min-w-44 max-w-44 object-center object-cover  '
                        width={125}
                        height={125}
                        alt="castimg"

                      />
                      <div className='absolute w-full  top-[40%]  left-[40%] '>

                        <FaRegPlayCircle className='opacity-50' size={30}/>
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

    </div>
  )
}

export default VideoCard