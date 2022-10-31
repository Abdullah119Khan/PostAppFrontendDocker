import { Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { createPost, updatePost } from '../../actions/post'
import { useDispatch, useSelector } from 'react-redux'

import styleList from './style'

const Form = ({ currentId, setCurrentId }) => {
  const classes = styleList()
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: ''})
  const posts = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId ) : null)

  const user = JSON.parse(localStorage.getItem('profile'))

  const dispatch = useDispatch()

  useEffect(() => {
    if(posts) setPostData(posts)
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(currentId) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
    } else {
      dispatch(createPost({...postData, name: user?.result?.name}))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({ title: '', message: '', tags: '', selectedFile: ''})
  }

  if(!user?.result?.name) {
    return(
      <Paper>
       <Typography variant='h6' align='center'>Please SignIn and create your own post</Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper} onSubmit={handleSubmit} elevation={3}>
    <form className={`${classes.root} ${classes.form}`}>
    <Typography variant='h5'>Create Post</Typography>
     <TextField variant='outlined' label='Title' name='title' value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} fullWidth/>
     <TextField variant='outlined' label='Message' multiline rows={4} name='message' value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} fullWidth/>
     <TextField variant='outlined' label='Tags' name='tags' value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} fullWidth/>
     <div className={classes.file}>
      <FileBase
      type='file'
      multiple={false}
      onDone={({ base64 }) => setPostData({...postData, selectedFile: base64})}
      />
     </div>
     <Button className={classes.submit} type='submit' variant='contained' color='primary' size='medium' fullWidth>Submit</Button>
     <Button onClick={clear} variant='contained' color='secondary' size='small' fullWidth>Clear</Button>
    </form>
    </Paper>
  )
}

export default Form