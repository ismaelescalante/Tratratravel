import { useState } from "react";
import React from "react";
import axios from "axios";
import {
  datoHeader,
  ciudad,
  options,
  options2,
  endPointIA,
} from "../Config/formConfig";
import { FormContainer, FormTitle, FormJson, FormOptions, FormInput, FormBtn } from "../styles/FormStyles";

const Form = () => {
  const [saveCiudad, setSaveCiudad] = useState("");
  const [saveOption1, setSaveOption1] = useState("");
  const [saveOption2, setSaveOption2] = useState("");
  const [exito, setExito] = useState("");
  const FrasesSabiasQue = [
    "¿Sabías que explorar el mundo puede mejorar tu salud mental?",
    "¿Sabías que conocer gente nueva puede ser una experiencia increíble?",
    "¿Sabías que los viajes tienen el poder de abrir tu mente a nuevas perspectivas?",
    "¿Sabías que descubrir nuevos horizontes te ayuda a superar tus límites?",
    "¿Sabías que explorar el mundo puede ser la mejor terapia para el alma?",
    "¿Sabías que los viajes te permiten conocerte mejor a ti mismo?",
    "¿Sabías que la aventura es una gran manera de aprender y desarrollar nuevas habilidades?",
    "¿Sabías que conocer culturas diferentes te brindan nuevas ideas?",
    "¿Sabías que los viajes te ofrecen la oportunidad de experimentar la magia del mundo?",
    "¿Sabías que los viajes te ayudan a romper con la monotonía y experimentar algo nuevo?",
    "¿Sabías que descubrir nuevos lugares te inspira a ver las cosas de una manera positiva?",
    "¿Sabías que descubrir nuevos países te ayuda a comprender sus diferencias?",
    "¿Sabías que la aventura es una manera entretenida y emocionante de relajarte y liberar tu estrés?",
    "¿Sabías que explorar el mundo te permite expandir tus horizontes?",
    "¿Sabías que descubrir nuevos destinos te ayuda a expandir tu conocimiento sobre el mundo?",
    "¿Sabías que conocer nuevos lugares te brinda la oportunidad de experimentar cosas nuevas?",
    "¿Sabías que el viaje puede ser una maravillosa forma de vivir la vida?",
    "¿Sabías que los viajes te permiten mejorar y desarrollar tus propias habilidades?",
    "¿Sabías que los viajes son una gran manera de estimular tu curiosidad?",
    "¿Sabías que los viajes te ayudan a encontrar tu verdadero propósito en la vida?"
  ]

  const onOptionChangeCiudad = (event) => {
    setSaveCiudad(event.target.value);
  };
  const onOptionChangeHandler = (event) => {
    setSaveOption1(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSaveOption2(event.target.value);
  };

  const sendData = async (e) => {
    e.preventDefault()
    console.log(`${process.env.REACT_APP_MY_KEY}`)
    const datoTravel = {
      model: "text-davinci-003",
      prompt: `Soy de ${saveCiudad}, recomiéndame un listado de 2 lugares dentro del territotio español para viajar que tenga ${saveOption1} en el que se pueda disfrutar de ${saveOption2}`,
      temperature: 0.5,
      max_tokens: 400,
    };

    try {
      const data = await axios.post(endPointIA, datoTravel, datoHeader);
      console.log(data)
      setExito("Cargando respuesta ...");
    
        setExito(data.data.choices[0].text);
      
      
    } catch (err) {
      setExito("error");
    }
  };

  return (
    <FormContainer>
      <FormTitle>¿A DÓNDE VAMOS?</FormTitle> 
      {exito ? <FormJson>{exito}</FormJson> : <FormOptions>
        ¿Desde dónde viajas?<FormInput onChange={onOptionChangeCiudad}>
          <option>Elige una opción</option>
          {ciudad.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        ¿Qué entorno prefieres? <FormInput onChange={onOptionChangeHandler}>
          <option>Elige una opción</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        ¿Cuáles son tus intereses?<FormInput onChange={onOptionChangeHandler2}>
          <option>Elige una opción</option>
          {options2.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        <FormBtn onClick={sendData}>ENVIAR</FormBtn>
        </FormOptions>}
     
      
      
        
    </FormContainer>
      
    
  );
};

export default Form;
