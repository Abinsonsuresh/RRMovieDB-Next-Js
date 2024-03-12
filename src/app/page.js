'use client'
import { getAPIurl, getGenres } from "@/provider/redux/homeSlice";
import { APIData } from "@/utils/api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"  

import MainHome from "@/pages/Home/MainHome";

export default function Home() {

  const dispatch =  useDispatch()


  useEffect(()=>{
    FetchImgData()
    getGenresData()
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


    //Call multiple APIs in single
    const getGenresData = async () =>{
      let promises = []
      let endpoints = ["tv", "movie"]
      let allGenres = {}
  
      endpoints.forEach((url)=>{
        promises.push(APIData(`/genre/${url}/list`))
  
      })
      const data = await Promise.all(promises)
      console.log("GEnrea",data)
  
      //Genres destructered instead of using below method
      data.map(({genres})=>{
        return genres.map((item)=> (allGenres[item.id] = item))
      })
  
      dispatch(getGenres(allGenres))
  
      
      // data.map((res)=>{
      //   console.log("Res",res.genres)
      //   return res.genres.map((item)=> (allGenres[item.id] = item))
      // })
  
      console.log(allGenres)
    }

  return (
   <div>
  <MainHome/>
   </div>
  );
}
