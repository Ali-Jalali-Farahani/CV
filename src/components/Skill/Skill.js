import React,{useRef,useEffect} from 'react'
import "./Skill.css"

export default function Skill({name,value}) {
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(!entry.target.classList.contains("active")){
              entry.target.classList.add("active");
              entry.target.value = value;
            }
          }
        });
      },
      {
        threshold:0.7
      }
    );

    observer.observe(elementRef.current)
    return () => {
      observer.unobserve(elementRef.current);
    };
    
  },[])

  return (
    <div id='skill-container'>
      <p id='skill_name'>{name}</p>
      <progress ref={elementRef} max={100} value={0}>test</progress>
    </div>
  )
}
