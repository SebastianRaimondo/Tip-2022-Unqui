import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = () => {

  const [text, setText] = useState(" ")

  const dispatch = useDispatch();


  return (
    <div className="post-form">
    <div className="bg-primary p">
      <h3>Escribí algo...</h3>
    </div>
    <form className="form my-1" onSubmit={e =>{
      e.preventDefault();
      dispatch(addPost({text}));
      setText("");
    }}>
      <textarea
        name="text"
        cols="30"
        rows="5"
        placeholder="Crea tu post"
        value ={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <input type="submit" className="btn btn-dark my-1" value="Enviar" />
    </form>
  </div>

  );
}

export default PostForm;
