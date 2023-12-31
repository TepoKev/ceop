"use client";
import Link from "next/link";
import TopBar from "../../TopBar";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState<string | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result) {
      if (!result.ok) {
        setInvalidCredentials(result.error);
      } else {
        router.push("/auth/dashboard");
      }
    }
  });

  const handlerRememberMe = (
    rememberMe: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(rememberMe.currentTarget.checked);
    localStorage.setItem(
      "rememberMe",
      rememberMe.currentTarget.checked
        ? JSON.stringify(rememberMe.currentTarget.checked)
        : "false"
    );
  };

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
    } else {
      localStorage.removeItem("rememberMe");
    }
  }, []);
  return (
    <>
      <TopBar />
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-600">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Ingresa al CEOP
              </h1>
              <form
                className="space-y-4 md:space-y-6 items-center"
                action="#"
                onSubmit={onSubmit}
              >
                <div>
                  {invalidCredentials && (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {invalidCredentials}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "El campo de email es requerido!",
                      },
                    })}
                    className={`border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="ab123@ues.edu.sv"
                  />
                  {errors.email && (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor=""
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "El campo de contraseña es requerido!",
                      },
                    })}
                    placeholder="••••••••"
                    className={`border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                  />
                </div>
                {errors.password && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errors.password && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {errors.password.message}
                      </span>
                    )}
                  </span>
                )}
                <div className="flex flex-col items-center justify-between sm:flex-row">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        checked={rememberMe}
                        onChange={handlerRememberMe}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Recuerdame
                      </label>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
