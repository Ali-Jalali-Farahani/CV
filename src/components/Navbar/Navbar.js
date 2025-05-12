import React , {useState} from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div id="navbar-container">
        <ul className='Navbar'>
            <li className='item'>خلاصه رزومه</li>
            <li className='item'>سوابق تحصیلی</li>
            <li className='item'>مهارت ها</li>
            <li className='item'>راه های ارتباطی</li>
        </ul>
    </div>
  )
}
