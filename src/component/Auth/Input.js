import { Grid, TextField, InputAdornment, ButtonBase } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const Input = ({ name, handleChange, label, type, autoFocus, half, handleShowPassword }) => (
  <Grid item xs={12} sm={ half ? 6 : 12}>
   <TextField
   name={name}
   onChange={handleChange}
   label={label}
   type={type}
   required
   fullWidth
   variant='outlined'
   autoFocus={autoFocus}
   InputProps={name === 'password' ? {
    endAdornment: (
      <InputAdornment position='end'>
      <ButtonBase onClick={handleShowPassword}>
      { type === 'password' ? <Visibility/> : <VisibilityOff/>}
      </ButtonBase>
      </InputAdornment>
    )
   } : null }
   />
  </Grid>
)


export default Input