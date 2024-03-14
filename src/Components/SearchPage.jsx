import { APIData } from '@/utils/api';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard';

const SearchPage = ({query}) => {

    const [data, SetData] = useState(null);
    const [pageNum, SetPageNum] = useState(1);
    const [loading, SetLoading] = useState(false);

  
    const FetchSearchData = () => {
        APIData(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                SetLoading(true)
                SetData(res)
                // setPageNum((prev) => prev + 1);
              
                SetLoading(false)
            }
        )
    }

    const NextPage = () => {
        APIData(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    SetData({ ...data, results: [...data?.results, ...res?.results] })
                }
                else {
                    SetData(res)
                }
                SetPageNum((prev) => prev + 1);
          
            }
        )
    }

    useEffect(() => {
        SetPageNum(1)
        FetchSearchData()
    }, [query])

  return (
    <>
    <div className='flex justify-center items-center flex-wrap gap-5'>

        <InfiniteScroll
            className='flex justify-center items-center flex-wrap gap-5'
            dataLength={data?.results?.length || []}
            next={NextPage}
            hasMore={pageNum <= data?.total_pages}
            loader={<h4>Loading...</h4>}
        >
            {
                data?.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (
                        <div className='' key={index}>
                            <MovieCard data={item} />
                        </div>

                    )

                })
            }
        </InfiniteScroll>



    </div>
</>
  )
}

export default SearchPage