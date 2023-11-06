
import React, { useState ,useEffect } from 'react';
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'; // slide arrows
import {RxDotFilled} from 'react-icons/rx'; // slide dots
import styled from 'styled-components';


function App() {
  const slides =[
    {
      url: 'https://images.unsplash.com/photo-1664558299532-7b3a053b4021?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1605640797058-58b7040a0e61?auto=format&fit=crop&q=80&w=3133&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=3133&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1615753378120-247a44dea109?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1483796206300-8fa93a4a9163?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  // Mouse Cursor trying //
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition(e.clientX - 5); // Adjust for the slider's width
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // ------------------- //



  return(
    <div className='max-w-[140vw] h-[70vh] w-full m-auto py-16 px-4 relative group'>
       <div style ={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
       {/* left arrow */}
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
       </div>

       {/* right arrow */}
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactRight onClick ={nextSlide} size={30} />
       </div>
       <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div>
            <RxDotFilled onClick={() => setCurrentIndex(slideIndex)} className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-gray-300'}`} />
          </div>
        ))}

       </div>
    </div>
  );
}

export default App;
