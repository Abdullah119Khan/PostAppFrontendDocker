import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '10px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  file: {
    width: '97%'
  },
  submit: {
    margin: '7px 0px'
  }
}))