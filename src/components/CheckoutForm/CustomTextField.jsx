import { TextField, Grid } from "@mui/material"
import { useFormContext, Controller } from "react-hook-form"

const FormInput = ({ name, label }) => {

    const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
        <Controller
            control={control}
            name={name}
            defaultValue={''}
            render={({ field }) => (
                <TextField {...field} label={label} required fullWidth />
            )}
        />
    </Grid>
  )
}

export default FormInput