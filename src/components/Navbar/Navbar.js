import React , {useState,useEffect} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

  return (
    <div id="navbar-container">
        <ul className={`Navbar ${showMenu ? 'active' : ''}`}>
            <CloseIcon style={{ fontSize: '60px',display:`${showCloseIcon ? 'inline-block' : 'none'} `}} onClick={() => setShowMenu(!showMenu)} />
            <li className='item'>خلاصه رزومه</li>
            <li className='item'>سوابق تحصیلی</li>
            <li className='item'>مهارت ها</li>
            <li className='item'>راه های ارتباطی</li>
        </ul>
        <div className='menu-icon' onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon style={{ fontSize: '60px' }} />
        </div>
    </div>
  )
}
