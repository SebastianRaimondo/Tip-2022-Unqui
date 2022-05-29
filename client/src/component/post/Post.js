import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostDiscussion from "../posts/PostDiscussion";
import { selectLoading, selectPost } from "../../features/postSlice";
import { userLoaded } from "../../actions/auth";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const loading = useSelector(selectLoading);
  const id = useParams();
  // console.log(id.id)
  //console.log(post);
  //console.log(loading);

  useEffect(() => {

    dispatch(getPost(id.id));
  }, []);


  return loading || post === null ? (
    <div className='container'>
      <Spinner />
    </div>
  ) : (
   <div className='container'>
      <Link to='/posts' className='btn'>
        Regresar a posts
      </Link>
     <PostDiscussion post={post} />
    </div>
  );



};

export default Post;
