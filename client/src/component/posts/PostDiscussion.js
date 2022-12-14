import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";


const PostDiscussion = ({
  post: {  text, name, avatar, user,  date },
}) => {

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posteado el <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default PostDiscussion;
