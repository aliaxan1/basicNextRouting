"use client"
import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = data => {
        console.log(data);
        router.push('/');
    }
    return (
        <>
            <div>
                <form className='flex flex-col py-5 mx-5 bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" {...register("email")} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" {...register("password")} />
                    <button type="submit">Login</button>
                </form>
            </div>
            <br />
            <Link className='text-cyan-700' href='/signup'>SIGNUP</Link>
        </>

    )
}

export default Login