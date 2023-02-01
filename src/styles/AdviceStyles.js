import styled from "styled-components";
import Img from '../images/airport.jpg'
import Img2 from '../images/asturias.jpg'

export const AdviceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url(${Img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    @media(max-width: 900px){
        flex-wrap: wrap;
    }
`


export const AdviceImg = styled.div`
    
`

export const AdviceWidget = styled.div`
    padding: 1rem;
`

export const AdviceText = styled.h2`
    color: white;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
    text-shadow: 2px 2px 2px black;
`

export const AdviceResponsive = styled.div`
    background-image: url(Img2);
    background-size: cover;
`