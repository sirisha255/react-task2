import React,{useState} from "react";
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Persondetails from "./Persondetails";
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom';

function Add() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
let history = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();

const ids= uuid();
let uniqueId = ids.slice(0,8);

let a = name,
b = email;

Persondetails.push({Id: uniqueId, Name: a, Email : b});

history('/main');

}


return <div>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId="formName">
            <Form.Control type="text" placeholder="Enter Name" required onChange ={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formEmail">
            <Form.Control type="text" placeholder="Enter Email" required onChange ={(e) => setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">submit</Button>
    </Form>
</div>



}
export default Add;