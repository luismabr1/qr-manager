'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validate, res } from 'react-email-validator';
import axios from 'axios';

const Register = () => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + 'register';
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const isValid = validate(email);
    console.log(res)
    return isValid;
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailError(validateEmail(email) ? '' : 'Ingresa un correo válido');
  };

  const submitHandler = async (data) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    if (!validateEmail(email)) {
        setEmailError('Ingresa un correo válido');
        return; // No enviar el formulario si el correo no es válido
      }

    const requestBody = {
      email,
      password,
    };

    try {
      const res = await axios.post(baseURL, requestBody);
      alert('¡Cuenta creada exitosamente!');
      router.push('/');
    } catch (error) {
      alert('Error al crear usuario...');
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-black-50">
      <div className="max-w-md w-full p-6 bg-black rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler({
              email: e.target.email.value,
              password: e.target.password.value,
              confirmPassword: e.target.confirmPassword.value,
            });
          }}
        >
         <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Correo Electrónico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
{/*           <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;