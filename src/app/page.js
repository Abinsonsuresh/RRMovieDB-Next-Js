'use client'
import { getAPIurl } from "@/provider/redux/homeSlice";
import { APIData } from "@/utils/api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"  


export default function Home() {

  const dispatch =  useDispatch()


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
      dispatch(getAPIurl(url))
      
    })
  }


  return (
   <div>
    hello
   </div>
  );
}
