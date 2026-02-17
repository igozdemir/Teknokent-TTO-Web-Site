import { CaretUp } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react'

function ToTopButton() {
    const [toTopButton, setToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                setToTopButton(true);
            }else{
                setToTopButton(false);
            }
        })
    }, []);
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
        {toTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                width: "50px",
                height: "50px",
                border: "0",
                color: "white",
                borderRadius: "10px",
                zIndex: "10"
            }} 
            onClick={scrollUp}
            className='second-bg'
            >
                <CaretUp size={32} />
            </button>
        )}
    </div>
  )
}

export default ToTopButton