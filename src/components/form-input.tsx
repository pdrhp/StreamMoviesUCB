import { InputHTMLAttributes } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import PasswordInput from "./password-input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";


type FormInputProps<TFieldValues extends FieldValues> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<TFieldValues>;
    formControlName: keyof TFieldValues;
    label: string;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
}

const FormInput = <TFieldValues extends FieldValues>({control,formControlName, label,type, placeholder}: FormInputProps<TFieldValues>) => {
return (
    <FormField
        control={control}
        name={formControlName as Path<TFieldValues>}
        render={({ field }) => (
            <FormItem className="space-y-1 min-h-[6.6rem]">
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    {type === 'password' ? <PasswordInput {...field} /> : <Input type={type} placeholder={placeholder} {...field}  />}
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);
};

export default FormInput;
