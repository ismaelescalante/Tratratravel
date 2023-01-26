import React, { useState } from 'react'
import { LoginContainer, LoginForm, LoginInput, LoginBtn, LoginTitle, LoginChange } from '../styles/LoginStyles'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [city, setCity] = useState('')
    const [registerMode, setRegisterMode] = useState(false)

    const processChange = e => {
      e.preventDefault()
      setRegisterMode(!registerMode)
    }

    const processRegister = async (e) => {
      e.preventDefault()
      console.log("registrado")
    }

    const processLogin = async (e) => {
      e.preventDefault()
      console.log("logeado")
    }

  return (
    <LoginContainer>
      
      
      <LoginTitle> {registerMode ? 'REGÍSTRATE' : 'LOG IN'}</LoginTitle>
      <LoginForm>
        <>
        {registerMode ? (
            <>
            NOMBRE DE USUARIO<LoginInput
             onChange={e => setUsername(e.target.value)}
             value={username}
             type="text" 
            ></LoginInput>

            CIUDAD<LoginInput
             onChange={e => setCity(e.target.value)}
             value={city}
             type="text" 
            ></LoginInput>

            EMAIL<LoginInput
             onChange={e => setEmail(e.target.value)}
             value={email}
             type="email" 
            ></LoginInput>
            
            
            CONTRASEÑA<LoginInput
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password" 
            ></LoginInput>
            
            </>
            ) : (<>EMAIL<LoginInput
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email" 
             ></LoginInput>
 
             CONTRASEÑA<LoginInput 
             onChange={e => setPassword(e.target.value)}
             value={password}
             type="password" 
             ></LoginInput>
             </>)}
        <LoginBtn onClick={registerMode ? processRegister : processLogin}>{registerMode ? 'REGÍSTRATE' : 'LOG IN'}</LoginBtn>
        <LoginChange onClick={processChange}>{registerMode ? '¿Ya tienes cuenta?': '¿No estás registrado?'}</LoginChange>
        </>
      </LoginForm>
      
     
    </LoginContainer>
  )
}

export default Login

