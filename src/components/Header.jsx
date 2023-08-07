import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { auth, provider } from '../firebase';
import { onAuthStateChanged, signInWithPopup , signOut} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn, setSignOut } from '../redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
    let abc;
    const history = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch(setSignIn({    // data send to userSlice
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history("/")
            }
          });
    }, [])

    const usersPhoto = useSelector((state)=>{
         // data accessed from userSlice
        return state.userxyz.photo;
        
    })

    const [toggle, setToggle] = useState(false);
    
    const menudata =  [
        {
            name: 'HOME',
            img: 'home-icon'
        },
        {
            name: 'SEARCH',
            img: 'search-icon'
        },
        {
            name: 'WATCHLIST',
            img: 'watchlist-icon'
        },
        {
            name: 'ORIGINALS',
            img: 'original-icon'
        },
        {
            name: 'MOVIES',
            img: 'movie-icon'
        },
        {
            name: 'SERIES',
            img: 'series-icon'
        }
        ];

    const handleAuth = () =>{

         signInWithPopup(auth , provider).then((res)=>{
            // console.log(res.user);
             abc = res.user;
            dispatch(setSignIn({    // data send to userSlice
                name: abc.displayName,
                email: abc.email,
                photo: abc.photoURL
            }))
            
        }).catch((error)=>{
            console.log(error);
        })

    }   
       
    const signoutFunc = () =>{

        signOut(auth).then(()=>{
            dispatch(setSignOut());
            setToggle(false);
            history("/login");

        }).catch((err)=> console.log(err));
    }
  return (
    <>
    <div className=' h-[55px] lg:h-[70px] bg-[#090b13]  flex items-center justify-between px-[36px] '>
        <img src="/images/logo.svg" className=' w-[80px] max-[640px]:w-[75px] ' alt="disney_Logo"/>
        {
            usersPhoto && (
                <div className=' max-[640px]:hidden flex items-center flex-1 ml-4 ' >
                    {menudata.map((data,index)=>(
                        <MenuItem key={index} name={data.name} image={data.img}  />
                    ))}
                </div>

            )
        }
        {
            !usersPhoto ? (
                <button className=' py-1 px-6 rounded-sm border-2  border-[#565663] hover:bg-[#565663] border-[090b13] viewer_h' onClick={handleAuth}>LOGIN</button>
            )
            :
            <img src={usersPhoto} alt='avatar' className=' w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] rounded-full cursor-pointer max-[640px]:w-[40px] max-[640px]:h-[40px] max-[640px]:border-[2px] border-[#f8f8ff] border-[2px] hover:opacity-70 ' onClick={()=> setToggle(!toggle)}/>
        }

            </div>

         {
            toggle && (<button className=' absolute top-[75px] right-[36px] z-10 border-[2px] border-solid border-white  bg-[rgba(0,0,0,0.5)] slider_shadow h-[50px] w-[110px] rounded-md flex items-center justify-center viewer_h v_hover hover:scale-105 ' onClick={signoutFunc }  >LOG OUT</button>)
         }   
    </>
  )
}
 
export default Header