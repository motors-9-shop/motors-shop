import { FormControl, FormLabel, Input, FormErrorMessage, InputProps } from "@chakra-ui/react";
import { useState } from "react";
import { Control, FieldError, useController } from "react-hook-form";

interface InputFieldProps extends InputProps {
  label: string
  name: string
  control: Control
  rules?: Record<string, unknown>
  defaultValue?: string | number
  [key: string]: unknown
  type?: string
  placeholder?: string
}

const InputField = ({ label, name, control, rules, type="text", placeholder, onChange, defaultValue = "",...rest }: InputFieldProps) => {
    const { field, fieldState, formState} = useController({
        name,
        control,
        rules,
        defaultValue
    });

    const { invalid, error } = fieldState;

  return (
    <FormControl isInvalid={invalid} {...rest}>
        <FormLabel htmlFor={name} textStyle="input-label">{label}</FormLabel>
        <Input 
            {...field}
            type={type} 
            value={field.value}
            id={name} 
            placeholder={placeholder}
            sx={{
                "::placeholder": {
                    fontFamily: `'Inter', sans-serif`,
                    fontWeight: "400",
                    fontSize: "16px"
                }
            }}/>
        <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
