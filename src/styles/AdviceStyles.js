import styled from "styled-components";
import Img from '../images/airport.jpg'

export const AdviceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url(${Img});
    background-size: co;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
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