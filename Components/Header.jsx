"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../public/images.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Header() {
    return (
        <div className='bg-red-400'>

            <div className='bg-red-400 text-white text-3xl flex justify-between mx-4'>
                <Image
                    className='w-40 h-10 m-3'
                    src={logo}
                    alt=''
                />
                <div className='flex m-3 mx-auto justify-around  space-x-5'>
                    <b>Home</b>
                    <b>About</b>
                    <b>Contact</b>
                </div>
                <div className='flex m-2 mx-auto justify-around '>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>

                </div>
            </div>
        </div>

    )
}

export default Header