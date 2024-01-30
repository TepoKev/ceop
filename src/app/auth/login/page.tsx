"use client";
import Link from "next/link";
import TopBar from "../../TopBar";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result) {
      if (!result.ok) {
        setInvalidCredentials(result.error);
        setLoading(false);
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
                      {errors.email.message + ""}
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
                        {errors.password.message + ""}
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
                        Recuérdeme
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
                    className="flex flex-row items-center bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 mx-1 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span>Ingresando...</span>
                      </>
                    ) : (
                      "Ingresar"
                    )}
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
