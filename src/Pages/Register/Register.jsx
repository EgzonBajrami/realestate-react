import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import {api, endpoints} from '../../Lib/Api'
import Alert from 'react-bootstrap/Alert';


const Register = () =>{
    const [email,setEmail] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age,setAge] = useState();
    const [password, setPassword] = useState();
    const [variant,setVariant] = useState();
    const [message,setMessage] = useState();



    const handleEmail =(e) =>{
        setEmail(e.target.value);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const register = [email,firstName,lastName,age,password]
        console.log(register);

        const config ={
            

        }
        config.data=register;

        const result = await api.call(endpoints.register,config);
        if(result.success){
            setVariant('success');
            setMessage('Successfully registered, please check your email for verification.')
        }
        if(!result.success){
            setVariant('danger');

            setMessage(result.data);
        }
        console.log(result);
    }


    return(
        <>
        {variant ?(<Alert variant={variant}>{message}</Alert>):( 
        <div className="register-div">
            
            <Form className=".d-flex flex-row" onSubmit={handleSubmit}>
               
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                     placeholder="Your first name" 
                     onChange={(e)=>{setFirstName(e.target.value)}} 
                     value={firstName} 
                     required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"
                     placeholder="Your last name" 
                     onChange={(e)=>{setLastName(e.target.value)}} 
                     value={lastName} 
                     required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" onChange={handleEmail} value={email}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                     placeholder="Your last name" 
                     onChange={(e)=>{setPassword(e.target.value)}} 
                     value={password} 
                     required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"
                     placeholder="Your age" 
                     onChange={(e)=>{setAge(e.target.value)}} 
                     value={age} 
                     required />
                </Form.Group>
                <Button type="submit">Register</Button>
                
            </Form>

        </div>
        )}
        </>
    )
}
export default Register;