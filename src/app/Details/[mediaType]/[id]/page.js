'use client'
import DataBanner from "@/Components/DataBanner"
import useFetchAPI from "@/hooks/useFetchAPI"

const page = ({params}) => {

  const { data, loading } = useFetchAPI(`/${params.mediaType}/${params.id}/videos`)
  const { data: credits, loading: loadingCreds } = useFetchAPI(`/${params.mediaType}/${params.id}/credits`)
console.log(data)
  // console.log(credits?.crew)
  return (
    <>
    <DataBanner video={data?.results?.[0]} credits={credits?.crew} mediaType={params.mediaType} id={params.id} /> 
    </>
  )
}

export default page