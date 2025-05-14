import React , {useState,useEffect,useContext} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SwitchLanguage } from "../../Contexts/Switch_language";

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
  const { changeToEnglish, setChangeToEnglish } = useContext(SwitchLanguage); 

  return (
    <div id="navbar-container">
        <p id='change_language' onClick={()=>{setChangeToEnglish(prev=>!prev);console.log(changeToEnglish)}}>{changeToEnglish?"FA":"EN"}</p>
            {changeToEnglish? (
              <ul className={`Navbar ${showMenu ? 'active' : ''}`} style={{direction:"ltr"}}>  
                <CloseIcon style={{ fontSize: '60px',display:`${showCloseIcon ? 'inline-block' : 'none'} `}} onClick={() => setShowMenu(!showMenu)} />

                <a style={{color:'white',textDecoration:"none"}} href="#summery-container">
                  <li className='item'>
                    Resume summary
                  </li>
                </a>
              
                <a style={{color:'white',textDecoration:"none"}} href="#educational-background">
                  <li className='item'>
                    Educational background
                  </li>
                </a>
              
                <a style={{color:'white',textDecoration:"none"}} href="#skill-container">
                  <li className='item'>
                    Skills
                  </li>
                </a>
              
                <li className='item'>
                  {"Contact me (under construction)"}
                </li>
              </ul>
            ):(
              <ul className={`Navbar ${showMenu ? 'active' : ''}`}>
                <CloseIcon style={{ fontSize: '60px',display:`${showCloseIcon ? 'inline-block' : 'none'} `}} onClick={() => setShowMenu(!showMenu)} />
                  
                <a style={{color:'white',textDecoration:"none"}} href="#summery-container">
                  <li className='item'>
                    خلاصه رزومه
                  </li>
                </a>

                <a style={{color:'white',textDecoration:"none"}} href="#educational-background">
                  <li className='item'>
                    سوابق تحصیلی
                  </li>
                </a>

                <a style={{color:'white',textDecoration:"none"}} href="#skill-container">
                  <li className='item'>
                    مهارت ها
                  </li>
                </a>

                <li className='item'>
                  {"تماس با من(در دست ساخت)"}
                </li>
              </ul>
            )}

        <div className='menu-icon' onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon style={{ fontSize: '60px' }} />
        </div>
    </div>
  )
}
