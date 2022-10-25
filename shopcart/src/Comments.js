import React, {useState, useEffect} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from "axios";

function CommentExample() {
  const [input, setInput] = useState({
    content:'',
  })

    function handleChange(event){
      const {name,value} = event.target

      setInput(prevInput => {
        return{
          ...prevInput,
          [name]: value

        }
      })
    }

    function handleClick(event){
      event.preventDefault();
      const newComment={
        content:input.content
      }

      axios.post("http://localhost:3001/create", newComment)

    }
  
 
    return(
      <>
      <div>
        <form>
          <div className='form-group'>
          <input onChange={handleChange} name="content" value={input.content} placeholder="add your comment here">
          </input>
          </div>

           <button onClick={handleClick} className="btn btn-lg btn-info">Add Comment</button>


        </form>
      </div>
      </>
      )
  }

export default CommentExample;