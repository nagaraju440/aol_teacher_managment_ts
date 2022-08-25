import {  OutlinedTextFieldProps, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
export interface IInputFormFeild extends OutlinedTextFieldProps {
  register?: Function;
  name: string;
  className:string;
}

const InputFormFeild: React.FC<IInputFormFeild> = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: props.name, defaultValue: "" });
  return (
    <div>
      <TextField
    {...props}
      {...field}
      className={props.className}
      helperText={error?.message || ""}
      error={!!error?.message}
    />
    </div>
  );
};
export default InputFormFeild;
