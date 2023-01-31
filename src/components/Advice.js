import React, { useState } from 'react';

import ImageSlider from "../components/ImageSlider";








const Advice = () => {

  


  
  return (
    <>

    <ImageSlider ></ImageSlider>
    
    <section>
{<div className="searchWidget" style={{width:"300px", height:"600px"}}>
  <iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=5&tp1=tratratravel&tp2=tratratravel&lob=H,FH,F,CA,A&des=&wbi=666699&olc=FFFFFF&whf=4&hfc=FFFFFF&wif=4&ifc=&wbc=286078&wbf=4&bfc=FFFFFF&wws=2&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameBorder="0">

  </iframe>
</div>}
    </section> 
  
      </>
  );
};

export default Advice;