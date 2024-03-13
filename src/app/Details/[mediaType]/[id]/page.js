'use client'
import DataBanner from "@/Components/DataBanner"
import UseFetchAPI from "@/hooks/UseFetchAPI"

const page = ({ params }) => {

  // const { data, loading } = UseFetchAPI(`/${params.mediaType}/${params.id}/videos`)
  // const { data: credits, loading: loadingCreds } = UseFetchAPI(`/${params.mediaType}/${params.id}/credits`)
  // console.log(data)
  // console.log(credits?.crew)
  return (
    <>
      <DataBanner  mediaType={params.mediaType} id={params.id} />
    </>
  )
}

export default page


{/* <DataBanner video={data?.results?.[0]} credits={credits?.crew} mediaType={params.mediaType} id={params.id} /> */}
