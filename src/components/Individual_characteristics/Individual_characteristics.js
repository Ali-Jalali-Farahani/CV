import React,{useContext} from 'react'
import './Individual_characteristics.css'
import { SwitchLanguage } from "../../Contexts/Switch_language";

export default function Individual_characteristics() {
    const { changeToEnglish } = useContext(SwitchLanguage);

  return (
    <div className='individual_container' style={{direction:"rtl"}}>
        {changeToEnglish ? (
            <div className='main_title'>
                <h5>Individual Characteristics</h5>
            </div>
        ):(
            <div className='main_title'>
                <h5>ویژگی های شخصی</h5>
            </div>
        )}
    </div>
  )
}
