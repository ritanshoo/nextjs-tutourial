// Client Side Component
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function page() {
  const getUsersAPI = 'https://jsonplaceholder.typicode.com/users';

  const [users, setusers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(getUsersAPI);
      if (response.data) {
        console.log(response)
        const users = response.data;
        setusers(users)
      }
    } catch (error) {
      console.log({ error })
    }
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className='m-auto bg-light p-3'>
        <Nav variant="dark" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* {JSON.stringify(users)} */}
      <div className='container mt-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0 ?
                <>
                  {
                    users.map((user,index) => {
                      const { id, name, username, website } = user
                      return (
                        <tr key={index}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{username}</td>
                          <td>{website}</td>
                        </tr>
                      )
                    })
                  }
                </>
                :
                null
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
