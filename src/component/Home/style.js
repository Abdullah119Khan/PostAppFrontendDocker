import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  container: {
    marginTop: '30px',
  },
  paper: {
    marginTop: '15px',
    padding: '3px'
  },
  appBar: {
    marginBottom: '10px',
    padding: theme.spacing(3),
    borderRadius: '10px'
  },
  [theme.breakpoints.down('sm')]: {
    gridSetting: {
      flexDirection: 'column-reverse'
    }
  }
}))