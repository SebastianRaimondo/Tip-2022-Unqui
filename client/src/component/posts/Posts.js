import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/post";
import { selectPosts } from "../../features/postSlice";
import Spinner from "../layout/Spinner";
import { selectLoading } from "../../features/postSlice";
import PostItem from "./PostItem";
import Alert from "../layout/Alert";
import PostForm from "./PostForm";

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post.posts);
 // const likes = useSelector((state) => state.post.posts.likes);
  const loading = useSelector(selectLoading);

 // console.log(posts);
 // console.log(likes);
  //console.log(loading)

  useEffect(() => {
    dispatch(getPosts());
    console.log(posts);
  }, []);

  return loading ? (
    <div className='container'>
      <Spinner />
    </div>
  ) : (
    <div className='container'>
      <Alert/>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Bienvenido a la comunidad
      </p>
     <PostForm/>
      <div className='posts'>
        {posts.map((post) => (
          <div key={post._id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
