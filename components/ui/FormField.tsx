import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './form'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Input } from './input';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
}

const FormField = <T extends FieldValues>({control, name, label, placeholder, type = "text"}: FormFieldProps<T>) => {
  return (
    <Controller 
      control={control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel className='label'>{label}</FormLabel>
          <FormControl>
            <Input
              className='input'
              type={type}
              placeholder={placeholder} 
              {...field} 
            />
          </FormControl>
          <FormDescription>
            This is your form field.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormField