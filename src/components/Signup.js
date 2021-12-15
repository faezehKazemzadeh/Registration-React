import React from 'react'
import {useRef ,useEffect, useState} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
export default function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const epasswordConfirmlRef=useRef()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [passwordconfirm,setPasswordconfirm]=useState()

    useEffect(()=>{
        emailRef.current=email
        passwordRef.current=password

    },[email])
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required ref={emailRef} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required ref={passwordRef} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type="password"  required ref={epasswordConfirmlRef} onChange={(e)=>setPasswordconfirm(e.target.value)}/>
                        </Form.Group>
                        <Button type="submit" className="mt-3 w-100">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
<h2>{emailRef.current}</h2>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </>
    )
}
