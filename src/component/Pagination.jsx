import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { getAllPost } from '../actions/post'
import { useSelector, useDispatch } from 'react-redux'


import styleList from './style'

const Paginate = ({ page }) => {
  const classes = styleList()
  const dispatch = useDispatch()
  const { numberOfPage } = useSelector(state => state.posts)

  useEffect(() => {
    if(page) dispatch(getAllPost(page))
  }, [page])

  return (
    <Pagination
    classes={{ ul: classes.ul}}
    count={numberOfPage}
    page={Number(page) || 1}
    variant='outlined'
    renderItem={(item) => (
      <PaginationItem {...item} component={Link} to={`/post?page=${item.page}`}/>
    )}
    />
  )
}

export default Paginate