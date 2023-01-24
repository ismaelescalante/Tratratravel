import React from 'react'
import { FormMain, FormTitle, FormContainer, FormInput, FormSelect, FormBtn } from '../styles/FormStyles'

const Form = () => {
  return (
    <FormMain>
        <FormTitle>Cuéntanos tus preferencias</FormTitle>
        <FormContainer>
            Número de personas<FormInput type="text"></FormInput>
            Presupuesto<FormInput type="text"></FormInput>
            Época del año<FormSelect>
            <option value="" hidden>Selecciona una época</option>
                <option>Primavera</option>
                <option>Verano</option>
                <option>Otoño</option>
                <option>Invierno</option>
            </FormSelect>
            Tipo de alojamiento<FormInput type="text"></FormInput>
            Tipo de transporte<FormSelect>
            <option value="" hidden>Selecciona un medio de transporte</option>
            <option>Avión</option>
            <option>Tren</option>
            <option>Coche</option>
            <option>Autobús</option>
            </FormSelect>
            <FormBtn>Enviar</FormBtn>
        </FormContainer>
    </FormMain>
  )
}

export default Form