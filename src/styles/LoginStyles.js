import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`
export const LoginTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 10px;
    color: #cacbcd;
`
export const LoginForm = styled.form`
    color: #cacbcd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 4px solid #286078;
    border-radius: 10px;
    width: 400px;
    height: 300px;
    padding: 2rem;
    font-size: 18px;
`
export const LoginInput = styled.input`
    outline: none;
    margin: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    background-color: #cacbcd;
    font-size: 18px;
`
export const LoginBtn = styled.button`
    cursor: pointer;
    font-size: 18px;
    padding: 0.2rem;
    border: none;
    border-radius: 5px;
    width: 120px;
    background-color: #cacbcd;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #286078;
        color: #cacbcd;
    }
`

export const LoginChange = styled.button`
    cursor: pointer;
    text-decoration: underline;
    font-size: 15px;
    background-color: #2a2a2c;
    color: #cacbcd;
    border: none;
    margin-top: 10px;
    font-family: 'Source Sans Pro', sans-serif;
`