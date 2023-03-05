import { FC } from "react";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { Control, FieldError, useController } from "react-hook-form";
import { styleGuide } from "../../styles/styleGuide";

interface InputFieldProps {
  label: string
  name: string
  control: Control
  rules?: Record<string, unknown>
  [key: string]: unknown
  type?: string
  placeholder?: string
}

const InputField = ({ label, name, control, rules, type="text", placeholder, ...rest }: InputFieldProps) => {
    const { field, fieldState} = useController({
        name,
        control,
        rules,
        defaultValue: ""
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
