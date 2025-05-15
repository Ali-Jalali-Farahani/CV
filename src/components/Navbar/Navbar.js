import React , {useState,useEffect,useContext} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { My_context } from "../../Contexts/My_context";


function scroll(id){
  window.scrollTo({
    top: document.getElementById(id).offsetTop-70,
  });
}

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(true);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  useEffect(() => {
    //after mount check if window width is less than 768px:
    //show menu icon and hide close icon
    if(window.innerWidth < 768) {
        setShowMenu(false);
        setShowCloseIcon(true);
    }
    
    //add event listener to window resize : to toggle showMenu and showCloseIcon
    window.addEventListener("resize", () => {
        if(window.innerWidth > 700) {
            setShowMenu(true);
            setShowCloseIcon(false);
        }else{
            setShowMenu(false);
            setShowCloseIcon(true);
        }
    })
    },[])
  
    
  //useContext to change language
  const { changeToEnglish, setChangeToEnglish } = useContext(My_context); 

  return (
    <div id="navbar-container">
        <p id='change_language' style={{cursor:"pointer"}} onClick={()=>{setChangeToEnglish(prev=>!prev);}}>{changeToEnglish?"FA":"EN"}</p>
            {changeToEnglish? (
              <ul className={`Navbar ${showMenu ? 'active' : ''}`} style={{direction:"ltr"}}>  
                <CloseIcon style={{ fontSize: '60px',display:`${showCloseIcon ? 'inline-block' : 'none'} `}} onClick={() => setShowMenu(!showMenu)} />

                <li className="item" onClick={() => scroll("summery-container")}>
                  Resume Summary
                </li>
                            
                <li className="item" onClick={() => scroll("educational-background")}>
                  Educational Background
                </li>
                            
                <li className="item" onClick={() => scroll("skill-container")}>
                  Skills
                </li>
                            
                <li className="item" onClick={() => scroll("individual_container")}>
                  Personal Characteristics
                </li>
              </ul>
            ):(
              <ul className={`Navbar ${showMenu ? 'active' : ''}`}>
                <CloseIcon style={{ fontSize: '60px',display:`${showCloseIcon ? 'inline-block' : 'none'} `}} onClick={() => setShowMenu(!showMenu)} />
                  
                <li className='item' onClick={()=>{scroll("summery-container")}}>
                  خلاصه رزومه
                </li>

                <li className='item' onClick={()=>{scroll("educational-background")}}>
                  سوابق تحصیلی
                </li>


                <li className='item' onClick={()=>{scroll("skill-container")}}>
                  مهارت ها
                </li>

                <li className='item' onClick={()=>{scroll("individual_container")}}>
                  ویژگی های شخصی
                </li>

              </ul>
            )}

        <div className='menu-icon' onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon style={{ fontSize: '60px' }} />
        </div>
    </div>
  )
}
