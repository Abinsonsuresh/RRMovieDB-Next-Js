'use client'
import { APIData } from "@/utils/api";
import { useEffect } from "react";
export default function Home() {


  useEffect(()=>{
    FetchImgData()
  })

  const FetchImgData = () =>{
    APIData('/configuration').then((res)=>{
      console.log(res)
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      
    })
  }


  return (
   <div>
    hello
   </div>
  );
}
