'use client'
import Link from 'next/link'
import TopBar from '../TopBar';
import React, { useState } from 'react';

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") ? true : false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(email.currentTarget.value);
    }

    const handlePassword = (password: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(password.currentTarget.value);
    }

    const handlerRememberMe = (rememberMe: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(rememberMe.currentTarget.checked);
        localStorage.setItem("rememberMe", rememberMe.currentTarget.checked ? JSON.stringify(rememberMe.currentTarget.checked) : "");
    }

    const actionForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //Validations
        if (email === '' || email === null) {
            setEmailError(true)
            return
        }
        else {
            setEmailError(false)
        }
        if (password === '' || password === null) {
            setPasswordError(true)
            return
        }
        else {
            setPasswordError(false)
        }
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const token = await response.json();
        console.log(token)
    }

    return (
        <>
            <TopBar />
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0" style={{ backgroundColor: "#6e0000" }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Ingresa al CEOP
                            </h1>
                            <form className="space-y-4 md:space-y-6 items-center" action="#" onSubmit={actionForm}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor=''>Email</label>
                                    <input type="email" name="email" id="email" defaultValue={email} onInput={handleEmail} className={`border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${emailError ? 'border-red-500' : ''}`} placeholder="ab123@ues.edu.sv" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor=''>Contraseña</label>
                                    <input type="password" name="password" id="password" defaultValue={password} onChange={handlePassword} placeholder="••••••••" className={`border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${passwordError ? 'border-red-500' : ''}`} />
                                </div>
                                {(passwordError || emailError) &&
                                    <div>
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            Campos no validos !
                                        </span>
                                    </div>
                                }
                                <div className="flex flex-col items-center justify-between sm:flex-row">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" checked={rememberMe} onChange={handlerRememberMe} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 dark:text-gray-300">Recuerdame</label>
                                        </div>
                                    </div>
                                    <Link href="#" className="text-sm font-medium text-white hover:underline">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <div className='flex justify-center'>
                                    <button type="submit" className="bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default login;