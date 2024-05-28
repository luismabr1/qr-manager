"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';


const Login = () => {
    const router = useRouter();
    const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "register";

    const submitHandler = async (data) => {

        const requestBody = {
            email: data.email,
            password: data.password
        }

        await axios
            .post(baseURL, requestBody)
            .then(function (res) {
                console.log(res);
                alert('Account created!');
                router.push('/');
            })
            .catch(function (error) {
                alert('Something went wrong...');
            });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black-50">
            <div className="max-w-md w-full p-6 bg-black rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    submitHandler({
                        email: e.target.username.value,
                        password: e.target.password.value,
                    });
                }}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md text-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md text-gray-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
