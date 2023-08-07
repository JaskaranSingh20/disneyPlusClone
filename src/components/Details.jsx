import React, { useEffect, useState } from 'react'
import DetailBg from './DetailBg'
import DetailContent from './DetailContent'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';
import { useSelector } from 'react-redux'

function Details() {
  const history = useNavigate();

  const userPhoto = useSelector((state)=>{
   return state.userxyz.photo; 
  })

  useEffect(()=>{
    if(!userPhoto){
        history("/login");
    }
  }, [])

  const id = useParams();
  // console.log(id.id);

  const [detailData, setDetailData] = useState();

  useEffect(()=>{

    const helper = async() =>{ 

      const docRef = doc(db, "movies", id.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        // console.log("Document data:", docSnap.data());
        setDetailData(docSnap.data());  // state updated

      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } 
    
    helper();
  }, [])

  return (
    <>
      { detailData && (

        <div className='  w-[100vw] h-[calc(100vh-55px)] bg-cover  bg-no-repeat overflow-x-hidden  max-[640px]:mt-[10px] '  >
            {/* background image top-0 bottom-0 right-0 left-0 */}
            
            <DetailBg link={detailData.backgroundImg}/>
            {/* content  */}
            <DetailContent titleImg={detailData.titleImg} subTitle={detailData.subTitle} description={detailData.description}/>
        </div>
      )}

    </>

  )
}

export default Details