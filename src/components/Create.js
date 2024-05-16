import Form from 'react-bootstrap/Form';
 import React, {useState} from 'react';
 import { Button } from 'react-bootstrap';
 import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'react-toastify/dist/ReactToastify.css';

 

//  const[formData,setFormData] = useState({                                    
//     title:'',
//     author:'',
//     body:'',
//  });
 
//  const HandleChange = (e) =>{
//         const{name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]:value,
//     });
const Create = ()=>{

    const[data,setData] = useState({                                    
        title:'',
        author:'',
        body:'',
     })

     
 const handleOnchange = (e) =>{
    const{name, value } = e.target;
    setData ((prev)=>{
        return {...prev, [name]: value};
    });
 }
 const handleSubmit =(e)=>{
     e.preventDefault()
     axios.post('http://localhost:4000/blogs', data)
        .then(res =>{
            //alert('new blog added)
            toast.success('new blog added successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })

        //.catch(err => console.log(err.message));
        .catch(err =>{
            toast.error('An error Occurred while adding the blog', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        })
    //     console.log('Form data submitted:', formData);
    //   };
 }

    return(
        <div >
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" onChange={handleOnchange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control name="author" type="text" onChange={handleOnchange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as ="textarea" onChange={handleOnchange} name="body" rows ={3}></Form.Control>
                </Form.Group>

                <Button variant='primary' type='submit'>Save blog</Button>
               <ToastContainer/>
               
               <p>{data.title}</p>
            <p>{data.author}</p>
            <p>{data.body}</p>
            </Form>
            
          
         
        </div>
    );
}

export default Create;