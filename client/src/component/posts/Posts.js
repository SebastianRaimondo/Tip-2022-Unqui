import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import { selectPosts } from '../../features/postSlice';
import Spinner from "../layout/Spinner"

const Posts = () => {

const dispatch = useDispatch();

//const post = useSelector(selectPosts)
//console.log(post)

useEffect(() => {
  dispatch(getPosts())
},[])

  return (
    <div>
      Leiva
    </div>
  );
}

export default Posts;
