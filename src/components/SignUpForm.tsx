"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        Name: "",
        Age: "",
        Email: "",
        Password: "",
        SchoolName: "",
        SchoolCode: "",
    })
    const [error, setError] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        // Basic validation
        if (!formData.Name || !formData.Email || !formData.Password) {
            setLoading(false)
            setError("Please fill in all required fields.")
            return
        }

        try {
            const response = await fetch("http://localhost:8080/teacher/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "Name": formData.Name,
                    "Age": parseInt(formData.Age, 10),
                    "Email": formData.Email,
                    "TeacherID": "teacherId",
                    "Password": formData.Password,
                    "Image": "https://imgs.search.brave.com/8OVMrViALmMveEKIlNfcq6IfTRrBXTyPhTJU-XyyBZQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzM0LzcxLzg3/LzM2MF9GXzkzNDcx/ODc1NV9IY3dSRE1r/eGR3aEFsQ2MyZHhh/Wnhid0dXTnFGbXdL/NC5qcGc",
                    "SchoolName": formData.SchoolName,
                    "SchoolCode": formData.SchoolCode
                }),
            })

            if (response.ok) {
                router("/login")
            } else {
                const errorData = await response.json()
                setError(errorData.message || "An error occurred during signup.")
            }
        } catch (err) {
            console.log(err)
            setError("An error occurred. Please try again.")
        } finally {
            setLoading(false)
        }

    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-purple-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label htmlFor="Age" className="block text-sm font-medium text-purple-700">
                        Age
                    </label>
                    <input
                        type="number"
                        id="Age"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="Email" className="block text-sm font-medium text-purple-700">
                    Email
                </label>
                <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            <div>
                <label htmlFor="Password" className="block text-sm font-medium text-purple-700">
                    Password
                </label>
                <input
                    type="password"
                    id="Password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            <div>
                <label htmlFor="Image" className="block text-sm font-medium text-purple-700">
                    Profile Image
                </label>
                <input
                    type="file"
                    id="Image"
                    name="Image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-purple-700
            file:mr-4 file:rounded-md file:border-0
            file:bg-purple-50 file:px-4 file:py-2
            file:text-sm file:font-semibold file:text-purple-700
            hover:file:bg-purple-100"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="SchoolName" className="block text-sm font-medium text-purple-700">
                        School Name
                    </label>
                    <input
                        type="text"
                        id="SchoolName"
                        name="SchoolName"
                        value={formData.SchoolName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label htmlFor="SchoolCode" className="block text-sm font-medium text-purple-700">
                        School Code
                    </label>
                    <input
                        type="text"
                        id="SchoolCode"
                        name="SchoolCode"
                        value={formData.SchoolCode}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-purple-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>
            {error && (
                <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {error}
                </motion.p>
            )}
            <motion.button
                onSubmit={handleSubmit}
                className="w-full rounded-md bg-purple-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {loading ? "Loading..." : "Sign Up"}
            </motion.button>
        </motion.form>
    )
}

