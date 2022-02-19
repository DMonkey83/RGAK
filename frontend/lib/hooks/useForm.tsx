import React, { useState } from 'react';
import { SellFormProps } from '../types/FormTypes';

const useForm = (initial ) => {
  const [inputs, setInputs] = useState<SellFormProps>({});
  
  type valueType = string | number | File
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name,value, type} =  event.target;
    let newValue: valueType = value as valueType;
    
    switch (type) {
    case 'number':
      newValue = parseFloat(value).toString(); 
      break;
    case 'file':
      // eslint-disable-next-line no-case-declarations
      const inputEvent: React.ChangeEvent<HTMLInputElement> = event as React.ChangeEvent<HTMLInputElement>;
      [newValue] = inputEvent.target.files;
      break;
    default:
      break;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: newValue
    });
  };
  const resetForm = () => {
    setInputs(initial);
  };
  const clearForm = () => {
    const blankSlate = Object.entries(inputs) &&  
    Object.fromEntries(Object?.entries(inputs)?.map(([key, value]) => [key, value = '']));
    setInputs(blankSlate);
  };
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
};

export default useForm;