import React, { useState } from 'react'
import './gallery1.css'
import CloseIcon from '@mui/icons-material/Close';

import img1 from "../assets/Gallery/img1.jpg"
import img2 from "../assets/Gallery/img2.jpg"
import img3 from "../assets/Gallery/img3.jpg"
import img4 from "../assets/Gallery/img4.jpg"
import img5 from "../assets/Gallery/img5.jpg"
import img6 from "../assets/Gallery/img6.jpg"
import img7 from "../assets/Gallery/img7.jpg"
import img8 from "../assets/Gallery/img8.jpg"
import img9 from "../assets/Gallery/img9.jpg"
import img10 from "../assets/Gallery/img10.jpg"
import img11 from "../assets/Gallery/img11.jpg"
import img12 from "../assets/Gallery/img12.jpg"


export default function Photo() {
        let imag = [
                {
                        id: 1,
                        imgSrc:img1,
                },
                {
                        id: 2,
                        imgSrc:img2,
                },
                {
                        id: 3,
                        imgSrc:img3,
                },
                {
                        id: 4,
                        imgSrc:img4,
                },
                {
                        id: 5,
                        imgSrc:img5,
                },
                {
                        id: 6,
                        imgSrc:img6,
                },
                {
                        id: 7,
                        imgSrc:img8,
                },
                {
                        id: 9,
                        imgSrc:img9,
                },
                {
                        id: 10,
                        imgSrc:img10,
                },
                {
                        id: 11,
                        imgSrc:img11,
                },
                {
                        id: 12,
                        imgSrc:img12,
                },
                {
                        id: 7,
                        imgSrc:img7,
                },
        ]

        const [model,setModel] = useState( false );
        const [tempimgSrc, setTempImgSrc] = useState('');
        const getImg = (imgSrc) =>{
                setTempImgSrc(imgSrc);
                setModel(true);
        }

  return (
    <>  
        <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc}/>
                <CloseIcon onClick={() => setModel(false) }/> 
        </div>

        <div className='gallery'>
                {
                     imag.map((item,index) =>{
                        return(
                                <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                       <img src={item.imgSrc} style={{width: '100%'}}/> 
                                </div>
                        )
                     }) 
                }
        </div>      
    
    </>
  )
}
