import styled from "styled-components";

export const FormMain = styled.div`
    display: flex;
    flex-direction: column;
`
export const FormTitle = styled.h1`
    font-size: 28px;
`
export const FormContainer = styled.form`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
`
export const FormInput = styled.input`
    border: 1px solid black;
    outline: none;
    margin-bottom: 10px;
    width: 20%;
`

export const FormSelect = styled.select`
    border: 1px solid black;
    width: 20%;
    margin-bottom: 10px;

    option{
        color: black;
    }
`


export const FormBtn = styled.button`
    cursor: pointer;
    width: 20%;
`