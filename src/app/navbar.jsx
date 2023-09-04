import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex flex-row text-cyan-700'>
            <Link href='/'><h1 className='mx-4'>HOME</h1></Link>
            <Link href='/login'><h2 className='mx-8'>Login</h2></Link>
            <Link href='/signup'><h2 className='mx-2'>SignUp</h2></Link>

        </div>
    )
}


export default Navbar