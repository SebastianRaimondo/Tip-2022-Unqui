import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../features/userLogginSlice";
import { removeLike, addLike } from "../../actions/post";

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  console.log(likes)
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posteado el <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button onClick={e => dispatch(addLike(_id))} type='button' className='btn btn-light'>
          < i className='fas fa-thumbs-up'/>{" "}
          <span>{" "}
          {likes.length > 0 &&  (
            <span>{likes.length}</span>
          )}</span>
        </button>
        <button onClick={e => dispatch(removeLike(_id))} type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${_id}`} className='btn btn-primary'>
          Discusion{" "}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
