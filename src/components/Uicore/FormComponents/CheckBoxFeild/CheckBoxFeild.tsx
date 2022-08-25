import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useController } from "react-hook-form";

export interface ICheckBoxFeild extends CheckboxProps{
    label:string;
    name:string;
}
const CheckBoxFeild:React.FC<ICheckBoxFeild>=(props)=> {
    const {
        field,
        fieldState: { error },
      } = useController({ name: props.name, defaultValue: false });
    return (
         <FormGroup {...field} >
      <FormControlLabel control={<Checkbox  />} label={props.label} />
    </FormGroup>
    );
  }

  export default CheckBoxFeild;