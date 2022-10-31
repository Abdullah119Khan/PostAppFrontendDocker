import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Delete, MoreHoriz, ThumbUpAlt, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import moment from 'moment'
import { likePost, deletePost } from '../../../actions/post'
import { useDispatch } from 'react-redux'

import styleList from './style'

const Post = ({ post, setCurrentId }) => {
  const classes = styleList()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  const Likes = () => {
    if(post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
      ? (
        <><ThumbUpAlt size='small'/>&nbsp; {post.likes.length > 2 ? `You and ${post.likes.length - 1 } Other` : `${post.likes.length} Like${post.likes.length > 1 ? 's' : ''}`}</>
      ) : (
        <><ThumbUpAltOutlined size='small'/>&nbsp; {post.likes.length === 1 ? 'Like' : 'Likes'} {post.likes.length}</>
      )
    }
    return <><ThumbUpAltOutlined size='small'/>&nbsp; Like</>
  }

  return (
    <Card className={classes.card} elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography>{post.name}</Typography>
        <Typography>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button size='small' style={{ color: '#fff'}} onClick={() => setCurrentId(post._id)}>
          <MoreHoriz />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography variant='h6' className={classes.title}>{post.title}</Typography>
      <CardContent>
        <Typography color='textSecondary'>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button size='small' color='primary' disabled={!user} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <Delete />
          &nbsp;Delete&nbsp;
        </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default Post