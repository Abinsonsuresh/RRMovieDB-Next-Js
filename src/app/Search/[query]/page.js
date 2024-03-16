'use client'

import SearchPage from "@/Components/SearchPage/SearchPage"

const page = ({ params }) => {

    return (
       <SearchPage query={params.query}/>
    )
}

export default page