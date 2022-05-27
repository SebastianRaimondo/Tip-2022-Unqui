import React, {Fragment, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import { selectPosts } from '../../features/postSlice';
import Spinner from "../layout/Spinner";
import { selectLoading } from '../../features/postSlice';
import PostItem from './PostItem';

const Posts = () => {

const dispatch = useDispatch();

 const posts = useSelector(selectPosts)
 const loading = useSelector(selectLoading)

 //console.log(posts)
 //console.log(loading)

useEffect(() => {
  dispatch(getPosts());
  console.log(posts)
},[])

  return loading ? 
  
  <div className='container'><Spinner/></div>  : (

    <div className='container'>
    <h1 className='large text-primary'>Posts</h1>
    <p className='lead'>

      <i className='fas fa-user'></i> Bienvenido a la comunidad
    </p>
    {/*PostFron*/}
    <div className='posts'>


      
     {
   
     
     posts.map(post => (

     <div key={post._id} >
       
      <PostItem post={post}/>

      Soy el negrito leiva

     </div>
      
     ))}

    </div>
    </div>
  )
  
}

export default Posts;
