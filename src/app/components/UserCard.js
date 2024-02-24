"use client";
import React, {useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserAddress from './UserAddress';
import { APP_CONTEXT } from '../users/page';


export default function UserCard(props) {

    const user = useContext(APP_CONTEXT);

    // useEffect(()=>{
    //     console.log({user})
    // },[user])

    // const { user } = props
    const { id, name, username, website, address,company } = user


    return (
        <Card className="col-md-3" >

            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{`${id}. ${name}`}</Card.Title>
                <Card.Text>
                    {` username: ${username}`}
                    <div>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content
                    </div>
                </Card.Text>
                <UserAddress/>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

/**
 * users > UserCard (user) > UserAddress (address,company) > > >  >>> N th child
 * 
 */