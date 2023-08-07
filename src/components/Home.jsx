import React, { useEffect } from 'react'
import Imageslider from './Imageslider'
import Viewer from './Viewer'
import Movies from './Movies'
import db from "../firebase"
import { useNavigate } from 'react-router-dom'
import { collection,  getDocs } from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux"
import { setMovies } from '../redux/Slices/movieSlice'


function Home() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const userPhoto = useSelector((state)=>{ // data accessed from userSlice
   return state.userxyz.photo; 
  })
  
  useEffect(()=>{
    
    
    if(!userPhoto){
        history("/login");
    }

    const func = async() =>{
      await getDocs(collection(db, "movies"))
        .then((snapshot)=>{  
          const newData = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));                
          // console.log(newData);
          dispatch(setMovies(newData));  // called setMovies action creator 
        })
    }  

    func();

  }, [])


  return (
    
    <div className=' w-[100vw] h-[calc(100vh-55px)] px-[36px] bg-[url(/images/home-background.png)] bg-cover bg-no-repeat
     overflow-x-hidden '>

    <Imageslider/>
    <Viewer/>
   <Movies title="Recommended for You" type="recommend"/> 
   <Movies title="New to Disney+" type="new"/> 
   <Movies title="Originals" type="original"/> 
   <Movies title="Trending" type="trending"/> 
    </div>
  )
}

export default Home