import React, { useState, useEffect } from 'react';
import UserConsumer from "../hooks/useDatos";

const ImageSlider = () => {

  const [imagenArray, setImagenArray] = useState("")
  const [current, setCurrent] = useState(1)
  const [saveResultFinal, setSaveResultFinal] = UserConsumer();

let images = ""
let SliderData=[]
 


useEffect(() => {
  fetch(`https://pixabay.com/api/?key=32822302-e0bccee14336fc56618e7f358&q=sevilla+city&image_type=photo&pretty=true`)
  .then(response => response.json())
  .then(data =>   setImagenArray(data));
}
,[]
);
  


  return ( 
    <>

    <div className="slider">
   { <button className="right-arrow" onClick={()=>current == 6 ? "": setCurrent(current + 1)} > + </button>}
   {imagenArray ? <img src={imagenArray.hits[current].largeImageURL} alt='travel image' className='image' /> 
   : ""}
   {   <button className="left-arrow" onClick={()=>current == 0 ? "":setCurrent(current - 1) } > - </button>}
   </div>

 </>
  );
}

export default ImageSlider;