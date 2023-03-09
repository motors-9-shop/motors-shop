import { RadioGroup, HStack, Radio, ButtonProps } from "@chakra-ui/react";
import { useState } from "react";
import { UseFormReturn, useController } from "react-hook-form";
import StyledButton from "../StyledButton";

interface IRadioButtonProps extends ButtonProps {
  label: string
  value: string
  control: UseFormReturn<any>["control"]
  name: string
  defaultValue?: string;
};

const RadioButton = ({label, value, control, name, defaultValue, ...rest}: IRadioButtonProps) => {
  const { field } = useController({
    name,
    control,
    defaultValue
  });

  const [isFocused, setIsFocused] = useState(false);
  const isPressed = field.value === value;

  const handleClick = () => {
    field.onChange(value);
  };

  return (
    <StyledButton
        {...rest}
        variant={isPressed ? "brand" : "outline"}
        textStyle="button-big-text"
        onClick={handleClick}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        aria-pressed={isPressed}
        >
      {label}
    </StyledButton>
  );
};

export default RadioButton