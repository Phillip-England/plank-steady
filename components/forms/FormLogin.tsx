
"use client"
import { type } from 'os';
import { FormEvent, useState } from 'react'


export const FormLogin = () => {

    // getting the form values
    const [email, setEmail] = useState('phillip@gmail.com');
    const [password, setPassword] = useState('password')

    // a struct for our form data
    type DataSignup = {
        email: string
        password: string
    }

    // our onsubmit function
    const submitForm = async (e: FormEvent) => {
        e.preventDefault()
        const data: DataSignup = {
            email: email,
            password: password,
        }
        const payload: string = JSON.stringify(data)
        const res: Response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
            credentials: "include",
        })
        const json = await res.json()
        if (res.status == 200) {
            window.location.href = "/location"
        }
    }

    return (
        <form className="flex flex-col p-4" onSubmit={ async (e) => await submitForm(e)}>
            <h3 className="mb-4">Log In</h3>
            <label className="text-xs mb-1">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border mb-2 p-1 text-sm" />
            <label className="text-xs mb-1">Password</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border mb-6 p-1 text-sm" />
            <input type="submit" className="text-sm bg-green-500 rounded py-2" />
        </form>
    )
}