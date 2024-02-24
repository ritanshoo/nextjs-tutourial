// Client Side Component
'use client'
import React, { useEffect, useState, createContext } from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserCard from '../components/UserCard';

export const APP_CONTEXT = createContext([]);

export default function page() {
  const getUsersAPI = 'https://jsonplaceholder.typicode.com/users';

  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get(getUsersAPI);

      if (response.data) {
        console.log(response)
        const users = response.data;
        setLoading(false)

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
        <div className='row g-2'>
          {
            users.length > 0 ?
              <>
                {
                  users.map((user, index) => {
                    // const { id, name, username, website } = user
                    return (
                      <APP_CONTEXT.Provider value={user}>
                        <UserCard />
                      </APP_CONTEXT.Provider>
                    )
                  })
                }
              </>
              :
              <div>
                Loading
              </div>
          }
        </div>


        {/* {
          loading ? "Loading" :
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
                        users.map((user, index) => {
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
                    <div>
                      Loading
                    </div>
                }
              </tbody>
            </Table>
        } */}
      </div>
    </div>

  )
}
