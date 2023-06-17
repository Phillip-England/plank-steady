"use client"
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react'
import { FormLoader } from '../loaders/FormLoader';


export const FormSignup = () => {

    // setting up our state
    const [email, setEmail] = useState('phillip@gmail.com');
    const [password, setPassword] = useState('password')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // a struct for our form data
    type DataSignup = {
        email: string
        password: string
    }

    // our onsubmit function
    const submitForm = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        const data: DataSignup = {
            email: email,
            password: password,
        }
        const payload: string = JSON.stringify(data)
        const res: Response = await fetch("http://localhost:8080/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload
        })
        const json = await res.json()
        setLoading(false)
        if (res.status != 201) {
            setError(json.msg)
            return
        }
        // window.location.href = "/"
    }

    return (
        <form className="flex flex-col p-4" onSubmit={ async (e) => await submitForm(e)}>
            <h3 className="mb-4">Sign Up</h3>
            {error ? (
                <p className='text-sm mb-4 text-red-500'>{error}</p>
            ) : (null)}
            <label className="text-xs mb-1">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border mb-2 p-1 text-sm" />
            <label className="text-xs mb-1">Password</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border mb-6 p-1 text-sm" />
            {loading ? (
                <FormLoader />
            ) : (
                <input type="submit" className="text-sm bg-green-500 rounded py-2" />
            )}
        </form>
    )
}