import React,{useEffect, useContext} from 'react'
import './Individual_characteristics.css'
import { My_context } from "../../Contexts/My_context";

export default function Individual_characteristics({mobileSize}) {
    const { changeToEnglish } = useContext(My_context);
    useEffect(() => {console.log("tt"+mobileSize)},[])
  return (
    <div id='individual_container' style={{direction:"rtl"}} className={`${mobileSize ? "mobileSize":""}`}>
        {changeToEnglish ? (
            <div style={{direction:"ltr"}}>
              <h5>Personal Characteristics</h5>
              <p className='individual_characteristics_description' style={{direction:"ltr" }}>
                {`I live in Iran, Tehran
                Born 07/1380 (23 years old)
                
                Interested in mastering web development in the shortest possible time 
                
                I have no work experience, but given my abilities I can reach a mid-level in programming in a short time
                
                In all my tasks, including my plans and programming, I use management tools such as Microsoft To Do and the advanced app Notion.
                I have a little experience working with Trello
                
                As for secondary skills, I am fully proficient in Microsoft Word and Microsoft PowerPoint
                
                Besides programming, if some skills would be useful for me and the company, I am eager to learn them
                `}
              </p>
            </div>
        ):(
            <div>
                <h5>ویژگی های شخصی</h5>
                <p className='individual_characteristics_description'>
                    {`ساکن تهران هستم.
                    متولد 07/1380 (23 ساله)

                    علاقه مند به یادگیری کامل برنامه نویسی سایت 

                    سابقه کاری ندارم اما با توجه توانایی هایی که دارم می‌توان در زمان کوتاه به سطح mid Level در برنامه نویسی برسم
                    
                    در تمامی کار هایم از جمله برنامه هام و برنامه نویسی از نرم افزار هایی مثل Microsoft Todo و برنامه پیش رفته notion برای مدیریت استفاده میکنم
                    تجربه کوچکی در کار با Trello دارم
                    
                    در رابطه با مهارت های فرعی Microsoft word,Microsoft PowerPoint را به صورت کامل مسلط هستم
                    
                    در کنار برنامه نویسی اگر بعضی از مهارت ها برای بنده و هم شرکت مفید باشد علاقه مند به یادگیری هستم
                    `}
                </p>
            </div>
        )}
    </div>
  )
}
