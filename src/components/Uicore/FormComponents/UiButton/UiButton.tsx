import { CircularProgress, Tooltip } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import styles from "./UiButton.module.css";
export interface IUiButton extends ButtonProps {
  text: string;
  bg?: string;
//   onClick?: Function;
}
const UiButton: React.FC<IUiButton> = (props) => {
  return (
    <Button   variant="contained" {...props}>
     {props.text}
    </Button>
  );
};
export default UiButton;
// {/* <Button
//         color="error"
//         variant="contained"
//         className={`${styles.btn} ${props.className}`}
//         {...props}
//       >
//         {/* {props.disabled ? (
//           <CircularProgress color={props.color || "error"} size={24} />
//         // ) : ( */}
        // {props.text}
        // {/* // )} */}
    //   </Button> */}