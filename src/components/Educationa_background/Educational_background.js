import React,{useRef,useEffect} from 'react'
import "./Educational_background.css"
import {observer} from '../../functions';
//function for observer {run when element is visible}

export default function Educational_background() {
  const elementRef = useRef();

  useEffect(() => {observer.observe(elementRef.current)},[])

  return (
    <div ref={elementRef} id='educational-background'>
        <div className='main_title'>
            <h5>سوابق تحصیلی</h5>
        </div>
        <div className='university_details'>
            <h5>کارشناسی مهندسی کامپیوتر</h5>
            <h6>دانشگاه:دولتی سمنان</h6>
        </div>
    </div>
  )
}
