import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import CommentExample  from "./Comments";
// import Comments from "./CommentRecord";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";

export default function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImg, setShowImg] = useState({});
    const handleShow = (product) => {
      setShow(true);
      setShowImg(product);
    };
    const handleClose = () => {
      setShow(false);
    };

    return (
    <div>
        <div className="p-5">
            <span>Sort Price By:</span>
            <select OnChange={(e) => props.onSort(props.products, e.target.value)}>
            <option value="">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
        </select>
        </div>

        
        {props.products.map((product) => {
         return (
          <>
          <tb>
            <tr><div key={product.id} className="border border-1 p-3">
                 
                 <img
                     onClick={() => handleShow(product)}
                     src={product.img}
                     width="150"
                     alt={product.title}
                     className="mx-5" />

                     <h3 className="mx-5">
                     {product.title}
                 </h3>

                 <button
                     className="btn btn-secondary mx-2"
                     onClick={() => props.increaseBtn(product)}
                 >
                     <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                 </button>

                  <span id="qty" className="mx-5 p-3 border border-3">
                     {product.quantity}
                 </span>

                 <button
                     className="btn btn-secondary mx-2"
                     onClick={() => props.decreaseBtn(product)}
                 >
                     <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                 </button>
                
              
             </div> </tr>
            </tb>


            

             <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                         <Modal.Title>{showImg.title}</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                         <img
                             src={showImg.img}
                             width="350"
                             alt={showImg.title}
                             className="mx-5" />
                         <p>
                             <span className="text-dark">Ratings: </span>
                             {showImg.ratings}/5
                         </p>
                         {/* <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Matt</Comment.Author>
                                <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>How artistic!</Comment.Text>
                                <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            </Comment>
                          <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form> */}         {/* <Comments></Comments>}*/}
                         <CommentExample></CommentExample>

                  

                    </Modal.Body>
                 </Modal>
                 </>
                );
             })}
         </div>
    );
}

    