import React, { useState } from "react";
import Form from "../../../Uicore/FormComponents/FormFeild/Form";
import UiButton from "../../../Uicore/FormComponents/UiButton/UiButton";
import InputFormFeild from "../../../Uicore/FormComponents/InputFormFeild/InputFormFeild";
import styles from "../Global.module.css";
import AOLlogo from "../AOLlogo.jpg";

import * as yup from "yup";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton } from "@mui/material";
const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
export default function NewPassword() {
  const [showPassword,setShowPassword]=useState(true);
  const [showConfirmPassword,setShowConfirmPassword]=useState(true);

  const onSubmit = (data: any) => {
    console.log("data is", data);
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={AOLlogo} className={styles.img} />
        <div className={styles.heading}>New Password</div>
        <Form onSubmit={onSubmit} schema={newPasswordSchema}>
          <label className={styles.label}>Enter New Password</label>
          <InputFormFeild
            label="Enter new password"
            name="password"
            type={showPassword?"text":"password"}
            className={styles.input}
            variant={"outlined"}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
              <IconButton onClick={()=>setShowPassword(!showPassword)} >
                {showPassword?<VisibilityOff/>:<Visibility/>}
              </IconButton>
              </InputAdornment>
              )
            }}
          />
          <label className={styles.label}>Confirm Password</label>
          <InputFormFeild
            label="Confirm Password"
            name="confirmpassword"
            type={showConfirmPassword?"text":"password"}
            
            className={styles.input}
            variant={"outlined"}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
              <IconButton onClick={()=>setShowConfirmPassword(!showConfirmPassword)} >
                {showConfirmPassword?<VisibilityOff/>:<Visibility/>}
              </IconButton>
              </InputAdornment>
              )
            }}
          />
          <br />
          <UiButton text="Save" type="submit"></UiButton>
          <div className={styles.link}>cancel</div>
        </Form>
      </div>
    </div>
  );
}
