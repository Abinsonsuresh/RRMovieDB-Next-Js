'use client'
import Cast from "@/Components/DetailsPage/Cast"
import DataBanner from "@/Components/DetailsPage/DataBanner"
import VideoCard from "@/Components/DetailsPage/VideoCard"
import UseFetchAPI from "@/utils/FetchAPICaller"

const page = ({ params }) => {

  const { data, loading } = UseFetchAPI(`/${params.mediaType}/${params.id}/videos`)
  const { data: credits, loading: loadingCreds } = UseFetchAPI(`/${params.mediaType}/${params.id}/credits`)
  console.log(data)
  // console.log(credits?.crew)
  return (
    <>
      <DataBanner mediaType={params.mediaType} id={params.id} credits={credits?.crew} video={data?.results?.[0]} />
      <div className="p-6">
        <h2 className='text-2xl font-bold'>Cast</h2>
      </div>
      <Cast data={credits?.cast} loading={loadingCreds} />
      <div className="p-6">
        <h2 className='text-2xl font-bold'>Videos</h2>
      </div>

      <VideoCard data={data?.results} loading={loading}/>

    </>
  )
}

export default page


{/* <DataBanner video={data?.results?.[0]} credits={credits?.crew} mediaType={params.mediaType} id={params.id} /> */ }
