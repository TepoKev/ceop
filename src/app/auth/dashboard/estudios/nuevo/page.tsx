"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

function NuevoEstudio() {
  const alertRef: React.RefObject<HTMLDivElement> = React.createRef();
  const [showCreatedAlert, setCreatedShowAlert] = React.useState(false);

  const handleShowCreatedAlert = () => {
    setCreatedShowAlert(!showCreatedAlert);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("title", data.title);
    form.append("description", data.description);
    form.append("keywords", data.keywords);
    form.append("studyImage", data.studyImage[0]);
    form.append("studyPdf", data.studyPdf[0]);
    form.append("publishedAt", data.publishedAt);
    form.append(
      "lastReviewAt",
      data.lastReviewAt === "" ||
        data.lastReviewAt === undefined ||
        data.lastReviewAt === null
        ? ""
        : data.lastReviewAt
    );
    form.append("active", data.active);
    form.append("highlighted", data.highlighted);
    const response = await fetch("http://localhost:3000/api/auth/estudio", {
      method: "POST",
      body: form,
    });
    if (response.ok) {
      reset();
      handleShowCreatedAlert();
      if (alertRef?.current) alertRef?.current.focus();
    } else {
      alert("Error al crear el estudio");
    }
  });
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          showCreatedAlert ? "" : "hidden"
        } bg-green-100 border border-green-400 text-green-700 px-10 py-3 m-5 rounded relative`}
        ref={alertRef}
        role="alert"
      >
        <div className="flex flex-col">
          <strong className="font-bold">Registro exitoso!</strong>
          <span className="block sm:inline">
            Puedes ver el estudio en la sección de estudios dando click{" "}
            <Link
              href={"/auth/dashboard/estudios"}
              className="text-green-900 font-extrabold"
            >
              aqui
            </Link>
          </span>
        </div>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={handleShowCreatedAlert}
        >
          <svg
            className="fill-current h-6 w-6 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
      <form className="m-3" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Titulo
            </label>
            <textarea
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.title?.message && "border-red-500"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="title"
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
          <div className="w-full px-3 mb-6">
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
          <div className="w-full px-3 mb-6">
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
          <div className="flex w-full px-3 mb-6">
            <div className="mx-2">
              <label htmlFor="publishedAt">Fecha de Publicación</label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <input
                    id="publishedAt"
                    type="date"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.publishedAt?.message && "border-red-500"
                    }`}
                    placeholder="Selecciona una fecha"
                    {...register("publishedAt", {
                      required: {
                        value: true,
                        message: "La fecha de publicación es requerida!",
                      },
                    })}
                  />
                  {errors.publishedAt?.message && (
                    <p className="text-red-500 text-xs italic">
                      {errors.publishedAt?.message + ""}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-2">
              <label htmlFor="lastReviewAt">Ultima Fecha de Modificación</label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="lastReviewAt"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Seleccione una fecha"
                />
              </div>
            </div>
            <div className="mx-2">
              <label htmlFor="active">Activo</label>
              <div>
                <input type="checkbox" name="active" id="active" />
              </div>
            </div>
            <div className="mx-2">
              <label htmlFor="highlighted">Destacado</label>
              <div>
                <input type="checkbox" name="highlighted" id="highlighted" />
              </div>
            </div>
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
              accept="image/png, image/gif, image/jpeg, image/jpg"
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
              accept="application/pdf"
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
