import React, { MutableRefObject } from "react";
import { useForm, FormProvider, useFormContext, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './Form.module.css'
export interface IForm
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children: JSX.Element[] | JSX.Element;
  defaultValues?: any;
  schema?: yup.AnyObjectSchema;
  useFormMethodsRef?: MutableRefObject<UseFormReturn<any, object>>;
}



const Form: React.FC<IForm> = ({
  children,
  onSubmit,
  schema = yup.object(),
  defaultValues,
  ...props
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode:"all",
    // "onTouched"
    defaultValues,
  });
  if (props.useFormMethodsRef) props.useFormMethodsRef.current = methods;
  const { handleSubmit } = methods;
  const Call = () => {};
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit != undefined ? handleSubmit(onSubmit) : Call}
        className={styles.form}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
export default Form;
