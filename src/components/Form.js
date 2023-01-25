import "../styles/Form.css";
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

const Form = () => {
  const [saveCiudad, setSaveCiudad] = useState("");
  const [saveOption1, setSaveOption1] = useState("");
  const [saveOption2, setSaveOption2] = useState("");
  const [exito, setExito] = useState("");

  const onOptionChangeCiudad = (event) => {
    setSaveCiudad(event.target.value);
  };
  const onOptionChangeHandler = (event) => {
    setSaveOption1(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSaveOption2(event.target.value);
  };

  const sendData = async () => {
    console.log(`${process.env.REACT_APP_MY_KEY}`)
    const datoTravel = {
      model: "text-davinci-003",
      prompt: `Soy de ${saveCiudad}, recomiéndame un listado de 2 lugares dentro del territotio español para viajar que tenga ${saveOption1} en el que se pueda disfrutar de ${saveOption2} devuelveme la respuesta en Json`,
      temperature: 0,
      max_tokens: 300,
    };

    try {
      const data = await axios.post(endPointIA, datoTravel, datoHeader);

      setExito("Cargando respuesta ...");
      setTimeout(() => {
        setExito(data.data.choices[0].text);
      }, "1000");
    } catch (err) {
      setExito("error");
    }
  };

  return (
    <div className="contenedorGen">
      <div className="contenedorIzq">
        <div className="contenedorJson">{exito}</div>
      </div>
      <div className="contenedorDer">
        <label>Soy de </label>
        <select onChange={onOptionChangeCiudad}>
          <option>Elige una opción</option>
          {ciudad.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <br />
        <br />
        <br />
        <label>Texto 1 </label>
        <select onChange={onOptionChangeHandler}>
          <option>Elige una opción</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <br />
        <br />
        <br />
        <label>Texto 2 </label>
        <select onChange={onOptionChangeHandler2}>
          <option>Elige una opción</option>
          {options2.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <br />
        <br />
        <br />
        <button onClick={sendData}>Enviar</button>
      </div>
    </div>
  );
};

export default Form;
