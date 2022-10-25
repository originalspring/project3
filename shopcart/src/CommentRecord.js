import React, {useState, useEffect} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from "axios";

function Comments(){
  const [comments, setComment] = useState([
    content:''
  ])

  useEffect(()=>{
    fetch("/comment").then(res => {
      if (res.ok){
        return res.json()
      }
    }).then(jsonRes => setComment(jsonRes));
  })


  return <div>
      <h1>Comments Record</h1>
  {comment.map(comment =>
    <p>{comment.content}</p>)}
    </div> 
}
  


export default Comments;