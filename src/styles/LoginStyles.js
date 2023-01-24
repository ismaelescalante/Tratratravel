import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -50px;
`
export const LoginTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 10px;
`
export const LoginForm = styled.form`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    width: 400px;
    height: 300px;
    padding: 2rem;
    
`
export const LoginInput = styled.input`
    outline: none;
    margin: 10px;
`
export const LoginBtn = styled.button`
    cursor: pointer;
`

export const LoginChange = styled.button`
    cursor: pointer;
    text-decoration: underline;
    font-size: 15px;
    background-color: white;
    border: none;
    margin-top: 10px;
`