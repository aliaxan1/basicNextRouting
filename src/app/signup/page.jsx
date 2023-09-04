"use client"
import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        router.push('/login');
    }


    return (
        <>
            <div>
                <form className='flex flex-col py-5 mx-5 bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">User Name</label>
                    <input className='' type="username" id="username" name="username" {...register("username")} />
                    <label htmlFor="email">Email</label>
                    <input className='' type="email" id="email" name="email" {...register("email")} />
                    <label htmlFor="password">Password</label>
                    <input className='' type="password" id="password" name="password" {...register("password")} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <br />
            <Link className='text-cyan-700' href='/login'>LOGIN</Link>
        </>
    )
}

export default SignUp