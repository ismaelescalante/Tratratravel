/* 
import UserConsumer from "../hooks/useDatos";


const [saveResultFinal, setSaveResultFinal] = UserConsumer();

 */

 let images = [];
 let SliderData=[]


  fetch(`https://pixabay.com/api/?key=32822302-e0bccee14336fc56618e7f358&q=madrid+city&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
        console.log(data.hits);
      data.hits.forEach(obj => {
        if (images.length < 6) {
          images.push(obj.largeImageURL);
        }
      })
  
      SliderData.push({image:images[1]},{image:images[2]},{image:images[3]},{image:images[4]},{image:images[0]})
    });
    console.log(images);

console.log(SliderData);


    module.exports=SliderData
 /*    export default SliderData; */