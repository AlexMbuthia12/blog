import Form from 'react-bootstrap/Form'
 import React, {useState} from 'react';
 import { Button, useAccordionButton } from 'react-bootstrap'
 import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';

 const Create = () =>{

 const[formData,setFormData] = useState({                                    
    title:'',
    author:'',
    body:'',
 });
//  const HandleChange = (e) =>{
//     const{name, value } = e.target;
//     setFormData ((prev))=>{
//         return {}
//     }

    const HandleChange = (e) =>{
        const{name, value } = e.target;
    setFormData({
        ...formData,
        [name]:value,
    });

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form data submitted:', formData);
    //   };
 }

    return(
        <div>
            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" onChange={HandleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control name="author" type="text" onChange={HandleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as ="textarea" onChange={HandleChange} name="body" rows ={3}></Form.Control>
                </Form.Group>

                <Button variant='primary' type='submit'>Save blog</Button>
               
               
            </Form>
            <p>{formData.title}</p>
            <p>{formData.author}</p>
            <p>{formData.body}</p>
          
         
        </div>
    );
}

export default Create;