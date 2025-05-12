import React ,{useRef,useEffect}  from 'react'
import "./Educational_background.css"

//function for observer {run when element is visible}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if(!entry.target.classList.contains("active")){
          entry.target.classList.add("active");
        }
      }
    });
  },
  {
    threshold:0.7, // فقط وقتی حداقل 10٪ از عنصر داخل صفحه دید باشه
  }
);

export default function Educational_background() {
  const elementRef = useRef(null);

  useEffect(() => {observer.observe(elementRef.current)},[])

  return (
    <div ref={elementRef} className='educational-background'>
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
