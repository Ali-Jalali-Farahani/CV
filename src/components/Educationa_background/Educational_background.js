import React,{useRef,useEffect,useContext} from 'react'
import "./Educational_background.css"
import {observer} from '../../functions';
import { My_context } from "../../Contexts/My_context";

//function for observer {run when element is visible}

export default function Educational_background() {
  const elementRef = useRef();

  const { changeToEnglish } = useContext(My_context);
  useEffect(() => {observer.observe(elementRef.current)},[])

  return (
    <div ref={elementRef} id='educational-background'>
      {changeToEnglish ? (
        <>
          <div className='main_title'>
              <h5>Educational Background</h5>
          </div>
          <div className='university_details'>
              <h5>Bachelor of Computer Engineering</h5>
              <h6>University: Semnan University</h6>
          </div>
        </>    
      ):(
        <>
          <div className='main_title'>
              <h5>سوابق تحصیلی</h5>
          </div>
          <div className='university_details'>
              <h5>کارشناسی مهندسی کامپیوتر</h5>
              <h6>دانشگاه:دولتی سمنان</h6>
          </div>
        </>
      )}
        
    </div>
  )
}
