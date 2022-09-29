import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../actions/post'



const CommentForm = props => {

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  
  return (
    <div className="post-form">
    <div className="bg-primary p">
      <h3>Deja tu comentario...</h3>
    </div>
    <form className="form my-1" onSubmit={e =>{
      e.preventDefault();
      dispatch(addComment(props.postId,{text}));
      setText("");
    }}>
      <textarea
        name="text"
        cols="30"
        rows="5"
        placeholder="Deja tu comentario"
        value ={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <input type="submit" className="btn btn-dark my-1" value="Enviar" />
    </form>
  </div>
  )
}


export default CommentForm
