import React, { useContext ,useState} from 'react'
import { AppConfig } from '../../context/AppConfig'
import { ConvenCord } from '../Coordinators/ConvenCoord'
import { StudCoord } from '../Coordinators/StudCoord'
import { Footer } from '../Footer/Footer'
import logo1 from '../../assets/logo1.png';
import { Gallery } from '../Gallery/Gallery'
// import { Header } from '../header/Header'
import { About } from '../Landing/About'
import { LandingTitle } from '../Landing/LandingTitle'
import Loader from '../Loader/Loader'
import { Schedule } from '../Schedule/Schedule'
import { Sponsors } from '../Sponsors/Sponsors'
import { Header } from '../header/Header'

export const Main = () => {
    const {loaded} = useContext(AppConfig)
    const [navbar, setNavbar] = useState(false);
  return (
    <>

  
    
    <div className='w-screen min-h-screen '>
    

    <div className={` max-w-96 h-full  ${loaded?"block":"hidden"}   `}>
        <div  className ="sticky top-0 bottom-0 z-30 ">
<Header/>
        </div>
       
    <LandingTitle id = "home" />
   
    <div  className ="relative z--1 rounded-t-8xl mt-8 bg-black"> 
    <div id = "about">
    <About   />
    </div>
    <div id = "gallery">
    <Gallery  />
    </div>
  <div id = "schedule">
  <Schedule  />
  </div>
  <div >  <StudCoord/>
  <ConvenCord/></div>
< div  id = "sponsors"> <Sponsors/></div>
 
  <Footer/>
    </div>
    

    </div>

<div class={` w-screen h-screen bg-black   top-0 bottom-0 left-0 z-9 ${loaded?"hidden":"block"} ` }>  
<Loader/> 
 </div>


        </div>
  </>

  )
}
