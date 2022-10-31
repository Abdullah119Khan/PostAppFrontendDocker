import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  logoProfile: {
    marginLeft: '15px'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  profile: {
    width: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: '5px'
    }
  }
}))