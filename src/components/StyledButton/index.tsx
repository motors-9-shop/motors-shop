import { Button, ButtonProps } from "@chakra-ui/react";
import { defaults } from "./defaults";

interface StyledButtonProps extends ButtonProps {
  variant: "grey" | "negative" | "brand" | "brandOpacity" | "light" | "medium44" | "outlineBrand1" | "link" | "alert" | "sucess" | "outline";
}

const StyledButton = ({ variant, children, ...rest }: StyledButtonProps) => {
  return (
    <Button 
      textStyle="button-big-text"
      borderRadius={"4px"}
      _disabled={{
        colorScheme: "grey",
        bg: "grey.5",
        color: "whiteFixed",
        cursor: "not-allowed",
        pointerEvents: "none",
      }}
      border={"1.5px solid transparent"} 
      {...defaults[variant]} 
      {...rest} 
    >
      {children}
    </Button>
  );
};

export default StyledButton;
