import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const {posts} = useSelector(state => state.posts)


  return (
    !posts?.length ? <CircularProgress /> : (
      <Grid container spacing={3}>
       {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={4}> 
         <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>
       ))}
      </Grid>
    )
  )
}

export default Posts