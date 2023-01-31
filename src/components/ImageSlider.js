import React, { useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
/* import UserConsumer from "../hooks/useDatos";


const [saveResultFinal, setSaveResultFinal] = UserConsumer(); */

const ImageSlider = ({ slides }) => {
    console.log(typeof slides, slides);
  const [current, setCurrent] = useState(0);
  const len = slides.length;
  

  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.len <= 0) {
    return null;
  }

  return (
    <>
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
{/*     <section>
<div id="searchWidget" style="width:300px;height:600px;"><iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=5&tp1=tratratravel&tp2=tratratravel&lob=H,FH,F,CA,A&des=&wbi=666699&olc=FFFFFF&whf=4&hfc=FFFFFF&wif=4&ifc=&wbc=286078&wbf=4&bfc=FFFFFF&wws=2&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
</div>
      </section> */}
      </>
  );
};

export default ImageSlider;