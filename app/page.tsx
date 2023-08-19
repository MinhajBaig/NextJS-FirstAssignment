"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  return (
    <>
      <h1 className="border-2 my-9 mx-auto w-1/2 text-center p-2 m-2">Home Page</h1>
      <Link href={"/Components/User"}>
        <h1 className="border-2  mx-auto w-1/2 text-center p-2 m-2">User Page</h1>
      </Link>

    </>

  )
}
