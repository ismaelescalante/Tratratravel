import styled from "styled-components";
import Img from '../images/plane-welcome.jpg'
import Img2 from '../images/alhambra.jpg'
import Img3 from '../images/tourist.jpg'

export const WelcomeImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center ;
    
`
export const WelcomeGreet = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Img2});
    
  
    
`
export const WelcomeAbout = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Img3});
    display: flex;
    justify-content: center;
  
    
    
`
