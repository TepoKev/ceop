"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { redirect } from 'next/navigation'


function NuevoEstudio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("title", data.title);
    form.append("description", data.description);
    form.append("keywords", data.keywords);
    form.append("studyImage", data.studyImage[0]);
    form.append("studyPdf", data.studyPdf[0]);
    const response = await fetch("http://localhost:3000/api/auth/register/estudio", {
      method: "POST",
      body: form,
    });
    if (response.ok) {
      //redirect("/auth/dashboard/estudios");
    } else {
      alert("Error al crear el estudio");
    }
  });
  return (
    <div className="flex justify-center">
      <form className="max-w-lg m-3" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Titulo
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.title?.message && "border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="title"
              type="text"
              placeholder="Titulo del estudio"
              {...register("title", {
                required: {
                  value: true,
                  message: "El campo de titulo es requerido!",
                },
              })}
            />
            {errors.title?.message && (
              <p className="text-red-500 text-xs italic">
                {errors.title?.message + ""}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.description?.message && "border-red-500"
              }`}
              id="description"
              placeholder="Descripción del estudio"
              {...register("description", {
                required: {
                  value: true,
                  message: "El campo de descripción es requerido!",
                },
              })}
            />
            {errors.description?.message && (
              <p className="text-red-500 text-xs italic">
                {errors.description?.message + ""}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="keywords"
            >
              Palabras clave
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.keywords?.message && "border-red-500"
              }`}
              id="keywords"
              placeholder="Palabras clave del estudio"
              {...register("keywords", {
                required: {
                  value: true,
                  message: "El campo de palabras clave es requerido!",
                },
              })}
            />
            {errors.keywords?.message && (
              <p className="text-red-500 text-xs italic">
                {errors.keywords?.message + ""}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="studyImage"
            >
              Imagen del estudio
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-50`}
              id="studyImage"
              type="file"
              {...register("studyImage")}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="studyPdf"
            >
              PDF del estudio
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                errors.studyPdf?.message && "border-red-500"
              }`}
              id="studyPdf"
              type="file"
              {...register("studyPdf", {
                required: {
                  value: true,
                  message: "Se requiere del PDF que avale el estudio!",
                },
              })}
            />
            {errors.studyPdf?.message && (
              <p className="text-red-500 text-xs italic">
                {errors.studyPdf?.message + ""}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full px-3 mb-6 md:mb-0">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Crear estudio
          </button>
        </div>
      </form>
    </div>
  );
}

export default NuevoEstudio;
