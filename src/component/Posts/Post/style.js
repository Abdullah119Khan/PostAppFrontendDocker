import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  media: {
    paddingTop: '56.26%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'
  },
  card: {
    borderRadius: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '12px',
    left: '10px',
    color: '#fff'
  },
  overlay2: {
    position: 'absolute',
    top: '12px',
    right: '5px'
  },
  details: {
    margin: '3px 10px'
  },
  title: {
    margin: '0px 15px'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))