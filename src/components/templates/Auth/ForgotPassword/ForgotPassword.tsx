import React from 'react'
import Form from "../../../Uicore/FormComponents/FormFeild/Form";
import InputFormFeild from "../../../Uicore/FormComponents/InputFormFeild/InputFormFeild";
import UiButton from "../../../Uicore/FormComponents/UiButton/UiButton";
import styles from '../Global.module.css'
import AOLlogo from '../AOLlogo.jpg'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
const forgotpasswordSchema=yup.object().shape({
  "uname":yup.string().required(),
})
export default function ForgotPassword() {
  
  const onSubmit=(data:any)=>{
    console.log("data is",data)
  }
  return (
    <div className={styles.outerContainer}>
    <div className={styles.container}>
    <img src={AOLlogo}  className={styles.img}  />
        <div className={styles.heading}>Forgot Password</div>
        <Form  onSubmit={onSubmit}  schema={forgotpasswordSchema} >
            <label className={styles.label}>Username</label>
            <InputFormFeild label="username" name="uname" className={styles.input} variant={'outlined'}></InputFormFeild>
            <br/>
            <UiButton text="Send" type="submit" className={styles.button}></UiButton>
            <Link to="/login" ><div className={styles.link}>Back to log in</div></Link>
        </Form>
    </div>
    </div>
  )
}
