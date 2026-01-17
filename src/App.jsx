import React, { useState } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
const App = () => {
  const [showContent, setshowContent] = useState(false)
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".vi-mask-group",{
      rotate: 10,
      duration: 2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%"
    })
    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      }
    })
  })
  useGSAP(()=>{
    
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
    gsap.to(".imagesDiv .text",{
      x:`${xMove*.4}%`
    })
    gsap.to(".sky",{
      x:`${xMove*.4}%`
    })
    gsap.to(".bg",{
      x:xMove*1.7,
    })
    });
  },[showContent])
  return (
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black'>
     <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
      <defs>
        <mask id='viMask'>
          <rect width="100%" height="100%" fill='black'/>
          <g className='vi-mask-group'>
          <text
          x="50%"
          y="50%"
          fontSize="250"
          textAnchor='middle'
          fill='white'
          dominantBaseline='middle'
          fontFamily='Arial Black'
          >
            VI
          </text>
          </g>
        </mask>
      </defs>
      <image
      href="./bg.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      mask="url(#viMask)"
      />
     </svg>
    </div>
    {showContent && <div className='main w-full bg-black'>
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-1.25">
                <div className="line w-15 h-2 bg-white"></div>
                <div className="line w-8 h-2 bg-white"></div>
                <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className='text-4xl -mt-2.5 leading-none text-white'>Rockstar</h3>
              </div>
            </div>
            
       <div className="imagesDiv relative w-full h-screen overflow-hidden">
        <img className='absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
             <img className='absolute bg scale-[1.2] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
             <div className="text absolute  flex flex-col gap-3 text-white top-0 left-1/2 -translate-x-1/2">
              <h1 className='text-9xl leading-none -ml-50'>grand</h1>
              <h1 className='text-9xl leading-none -ml-30'>theft</h1>
              <h1 className='text-9xl leading-none -ml-50'>auto</h1>
            </div>
             <img className='absolute character top-6 left-1/2 -translate-x-1/2 scale-[0.8]' src="./girlbg.png" alt="" />
             
       </div>
       <div className="btmbar overflow-hidden text-white w-full py-15 px-10 absolute bottom-0 left-0 bg-linear-to-t from-black to-transparent">
        <div className='flex items-center gap-4'>
        <i className="text-4xl ri-arrow-down-line"></i>
        <h3 className='text-xl font-[Helvectica_Now_Display]'>Scroll Down</h3>
        </div>
        <img className='h-14 absolute top-1/2 left-1/2 -translate-x-1/2' src="./ps5.png" alt="" />
       </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center bg-black'>
            <div className="cntnr flex w-full h-[80%]">
          <div className="limg relative h-full w-1/2">
     <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
         </div>
         <div className='rg w-[30%] text-white'>
         <h1 className='text-6xl'> Still Running,</h1>
         <h1 className='text-6xl'> Not Hunting</h1>
         <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, tempore. Neque, in doloremque nostrum, tempore harum aperiam ad dicta consequuntur obcaecati, saepe cumque?</p>
         <p className='mt-3 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quod doloremque quos ipsam iure, suscipit, dicta voluptates molestiae natus tempora officiis odio porro perspiciatis eum accusamus sapiente. Commodi pariatur non et distinctio quam, excepturi doloribus.</p>
         <button className='bg-yellow-500 px-5 py-5 text-4xl text-black mt-10 rounded'>Download Now!</button>
          </div>
            </div>
         
          </div>
      </div>
    }
    </>
  )
}

export default App