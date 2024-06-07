'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import Link from 'next/link'

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const submitHandler = async (data) => {
    const resdata = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(resdata);
    if (
      resdata.status === 400 ||
      resdata.status === 401 ||
      resdata.status === 403
    ) {
      setMessage('Invalid Credentials!');
      router.push('/register');
    } else if (resdata.status === 500) {
      setMessage('Server error!');
    } else {
      setMessage('Login successful!');
      router.push('/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-50">
      <div className="max-w-md w-full p-6 bg-black rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          submitHandler({
            email: e.target.email.value,
            password: e.target.password.value,
          });
        }}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black-600"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black-600"
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
          <div className="container-grid">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
              <Link className=" text-white px-4 py-2  hover:bg-gray-600 end-5" href='/register' >
                Register
              </Link>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
