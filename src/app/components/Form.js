"use client";
import React, { useState,useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginForm() {
    let [name, setName] = useState('');
    const nameRef = useRef(null);
    let [nameErr, setNameErr] = useState('');
    let [email, setEmail] = useState('');
    let [emailErr, setEmailErr] = useState('');
    let [password, setPassword] = useState('');
    let [passwordErr, setPasswordErr] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [confirmPasswordErr, setConfirmPasswordErr] = useState('');


    const handleNameInputChange = (e) => {
        const nameRegex = /^[0-9A-Za-z]{6,16}$/;
        const validationResult= nameRegex.test(e.target.value)
        if(validationResult){
            setNameErr('')
        }else{
            setNameErr('name should be between 6 and 16 characters, alphanumeric only')
        }
        nameRef.current.value = e.target.value 
    }
    const handleEmailInputChange = (e) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validationResult= emailRegex.test(e.target.value)

        if(validationResult){
            setEmailErr('')
        }else{
            setEmailErr('enter email in correct format')
        }
        setEmail(e.target.value)
    }

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordInputChange = (e) => {
        setConfirmPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if((nameErr === '' && emailErr === '' && passwordErr === '' && confirmPassword === '')){
            alert ("Fill the form properly")
            return 
            
        }else{
            const isMatch = confirmPassword === password; 
            if(!isMatch){
                alert ("Password and confirmPassword not matches")
                return 
            }
        
    
            console.log({
                name, 
                nameRef,
                password,
                confirmPassword, 
                email
            })
        }
    }

    useEffect(() => {
        console.log({name})
    }, [name]);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <span className='display-2'>
                    Signup here
                </span>
            </div>
            <div className='row'>
                <Form onSubmit={handleSubmit} className='col-6 bg-dark text-white border-3 rounded p-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name </Form.Label>
                        <Form.Control onChange={handleNameInputChange} ref={nameRef} type="text" placeholder="Enter name" />
                        {/* err message  */}
                        <Form.Text className="text-danger">
                            {nameErr !== '' && nameErr}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailInputChange} value={email} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Text className="text-danger">
                            {emailErr !== '' && emailErr}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordInputChange} value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={handleConfirmPasswordInputChange} value={confirmPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
