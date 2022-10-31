import { Grid, Container, Paper, AppBar, TextField, Button, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { getAllPost, fetchPostBySearch } from '../../actions/post'
import { useDispatch } from 'react-redux'
import Pagination from '../Pagination'
import ChipInput from 'material-ui-chip-input'
import { useNavigate, useLocation } from 'react-router-dom'

import styleList from './style'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const classes = styleList()
  const [currentId, setCurrentId] = useState(0)
  const query = useQuery();
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])

  const searchPost = () => {
    if(search.trim() || tags) {
      dispatch(fetchPostBySearch({ search, tags: tags.join(',')}))
      Navigate(`/post/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    } else {
      Navigate('/')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
   }
  }

  useEffect(() => {
    dispatch(getAllPost())
  }, [currentId, dispatch])

  const handleAdd = (tag) => setTags([...tags, tag])

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  return (
    <Grow in>
    <Container className={classes.container} maxWidth='xl'>
    <Grid container className={classes.gridSetting} justify='space-between' alignItems='stretch' spacing={3}>
     <Grid item xs={12} sm={6} md={8}>
      <Posts setCurrentId={setCurrentId}/>
     </Grid>
     <Grid item xs={12} sm={12} md={4}>
     <AppBar position='static' color='inherit' className={classes.appBar}>
      <TextField
      label='Search'
      name='search'
      variant='outlined'
      onKeyPress={handleKeyPress}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      fullWidth
      />
      <ChipInput 
      style={{ margin: '10px 0'}}
      variant='outlined'
      label='Tags'
      onAdd={handleAdd}
      onDelete={handleDelete}
      value={tags}
      onChange={(e) => setTags(e.target.value)}
      />
      <Button onClick={searchPost} variant='contained' type='submit' color='primary' size='small' fullWidth>Search</Button>
     </AppBar>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Paper className={classes.paper}>
       <Pagination page={page}/>
      </Paper>
     </Grid>
    </Grid>
    </Container>
    </Grow>
  )
}

export default Home