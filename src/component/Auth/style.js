import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '20px',
    borderRadius: 15,
  },
  submit: {
    margin: '10px 0'
  }
}))