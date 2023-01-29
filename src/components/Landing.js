import "../styles/Landing.css";
import React from 'react'
import {WelcomeImg, WelcomeGreet, WelcomeAbout} from "../styles/LandingStyles";

const Landing = () => {
  return (
    <>

   <WelcomeImg >
   <h1 className="greet" >
    TE DAMOS <br></br> LA BIENVENIDA <br></br>A TRATRATRAVEL
    </h1>
   </WelcomeImg>

   <WelcomeAbout > 
    <h1 className="aboutTitle" >
    ¿Qué es<br></br> Tra <br></br>Tra<br></br> Travel?
    </h1>
    <div className="aboutText">
    Tratratravel se esfuerza por ofrecer la mejor experiencia de viaje posible. Utilizamos la inteligencia artificial para recomendar los mejores destinos para cada cliente, basándonos en sus deseos y preferencias.
    </div>
  </WelcomeAbout>

  <WelcomeGreet> 

  </WelcomeGreet>

 </>
  )
}

export default Landing