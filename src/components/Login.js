import React, { useState } from 'react'
import { LoginContainer, LoginForm, LoginInput, LoginBtn, LoginTitle, LoginChange } from '../styles/LoginStyles'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
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
      <LoginTitle> {registerMode ? 'Regístrate' : 'Log in'}</LoginTitle>
      <LoginForm>
        <>
        {registerMode ? (
            <>
            Nombre de usuario<LoginInput
             onChange={e => setUsername(e.target.value)}
             value={username}
             type="text" 
            ></LoginInput>

            Email<LoginInput
             onChange={e => setEmail(e.target.value)}
             value={email}
             type="email" 
            ></LoginInput>
            
            
            Password<LoginInput
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password" 
            ></LoginInput>
            
            </>
            ) : (<>Email<LoginInput
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email" 
             ></LoginInput>
 
             Password<LoginInput 
             onChange={e => setPassword(e.target.value)}
             value={password}
             type="password" 
             ></LoginInput>
             </>)}
        <LoginBtn onClick={registerMode ? processRegister : processLogin}>{registerMode ? 'Regístrate' : 'Log in'}</LoginBtn>
        <LoginChange onClick={processChange}>{registerMode ? '¿Ya tienes cuenta?': '¿No estás registrado?'}</LoginChange>
        </>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login