import { Controller, Control } from 'react-hook-form';
import { Input, FormLabel, InputProps, FormControl } from '@chakra-ui/react';

interface IMoneyInputProps extends InputProps {
    control: Control
    name: string
    label: string
}

const MoneyInput = ({control, name, label, placeholder, type="text", ...rest}: IMoneyInputProps) => {
    

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
                <FormControl
                    {...rest}
                >
                    <FormLabel htmlFor={name} textStyle="input-label">{label}</FormLabel>
                    <Input
                        name={name}
                        type={type}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        onChange={(e) => {
                            const numbers = e.target.value.replace(/\D/g, "");
                            const currency = +numbers / 100;
                            const money = currency.toLocaleString("pt-br", {
                                currency: "BRL",
                                style: "currency",
                            });

                            e.target.value = money;
                            
                            onChange(
                                Number(numbers) / 100
                            )
                        }}
                    />
                </FormControl>
            )}
        />
    )
}

export default MoneyInput