
"use client"
import { FormEvent, useState } from 'react'


export const FormCreateLocation = () => {

    // getting the form values
    const [name, setName] = useState('Chick-fil-A Southroads');
    const [number, setNumber] = useState('03253')

    // making the form togglable
    const [form, setForm] = useState(true)

    // a struct for our form data
    type DataSignup = {
        name: string
        number: string
    }

    // our onsubmit function
    const submitForm = async (e: FormEvent) => {
        e.preventDefault()
        const data: DataSignup = {
            name: name,
            number: number,
        }
        const payload: string = JSON.stringify(data)
        const res: Response = await fetch("http://localhost:8080/location", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload
        })
        console.log(res)
    }

    return (
        <form className="flex flex-col p-4" onSubmit={ async (e) => await submitForm(e)}>
            <h3 className="mb-4">New Location</h3>
            <label className="text-xs mb-1">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border mb-2 p-1 text-sm" />
            <label className="text-xs mb-1">Number</label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="border mb-6 p-1 text-sm" />
            <input type="submit" className="text-sm border border bg-green-500 rounded py-2" />
        </form>
    )
}