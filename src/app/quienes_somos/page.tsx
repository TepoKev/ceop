import Image from "next/image";
import TopBar from "../TopBar";

const QuienesSomos = () => {
  return (
    <>
      <TopBar />
      <div className="text-center font-bold m-7">
        <h1 className="text-3xl">CENTRO DE ESTUDIOS DE OPINIÓN PÚBLICA</h1>
        <h1 className="text-3xl">FACULTAD MULTIDISCIPLINARIA PARACENTRAL</h1>
      </div>
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-2xl font-semibold leading-7 text-indigo-600">
              ¿Qué es el CEOP?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              El CEOP (Centro de Estudios de Opinión Pública) es una institución
              creada por la Junta Directiva de la Facultad Multidisciplinaria
              Paracentral (FMP) con el objetivo de investigar y analizar la
              opinión pública en áreas como la educación, economía, agricultura
              y política. Su propósito es proporcionar información relevante a
              la sociedad salvadoreña y contribuir a la toma de decisiones en
              estos ámbitos, tanto a nivel regional (región paracentral) como
              nacional.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Considerando la importancia de contribuir a la comprensión de
              diferentes procesos sociales en la región paracentral y a nivel
              nacional, la Junta Directiva de la FMP ha aprobado según el
              acuerdo Nº 24/2019-2021-V la creación del Centro de Estudios de
              Opinión Pública de la Facultad Multidisciplinaria Paracentral
              (CEOP FMP), que inició sus actividades en el ciclo II-2020.
            </p>
          </div>
          <div className="mx-auto mt-5 max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl text-center font-semibold leading-7 text-indigo-600 mb-10">
              Objetivos
            </h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </div>
                  Análisis Integral para la Toma de Decisiones
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Investigar la opinión pública en las áreas educativa,
                  económica, agrícola y política, con la finalidad de poner a
                  disposición de la sociedad salvadoreña la información generada
                  y contribuir a la toma de decisiones en estos ámbitos, en la
                  región paracentral y a nivel nacional.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </div>
                  Fomentando la Participación
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Diseñar e implementar procesos de investigación
                  académica-científica en las áreas educativa, económica,
                  agrícola y política, que fomenten la participación de la
                  población salvadoreña.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </div>
                  Conexión Triangular
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Promover la integración de actividades de investigación,
                  docencia y proyección social en la producción de datos sobre
                  la problemática social, como parte de la formación integral de
                  la comunidad educativa de la FMP.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                  </div>
                  Coordinación Efectiva
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Establecer mecanismos de comunicación y coordinación con
                  instancias de la región paracentral y a nivel nacional, que
                  contribuyan a la generación de información, el análisis y la
                  búsqueda de soluciones a las problemáticas identificadas.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pt-5">
            <h2 className="text-2xl text-center font-semibold leading-7 text-indigo-600 mb-10">
              Coordinadores
            </h2>
            <div>
              <div className="flex flex-col items-center w-full sm:flex-row">
                <div className="flex flex-col items-center sm:w-1/3">
                  <Image
                    src="/minerva.png"
                    alt="Jossue Humberto Henriquez Garcia"
                    height="100"
                    width="100"
                  />
                  <h1 className="text-xl text-gray-800 font-bold">
                    Ing. MSc. Jossué Humberto Henríquez García
                  </h1>
                  <h2 className="text-lg text-gray-500 font-bold">
                    Coordinador General
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero rem aliquid corporis nesciunt, modi suscipit eligendi
                    porro rerum veniam, debitis mollitia ullam quas
                    perspiciatis, vero aperiam quidem eius maiores accusantium?
                  </p>
                </div>
                <div className="flex flex-col items-center sm:w-2/3 sm:m-6">
                  <Image
                    src="/minerva.png"
                    alt="Jossue Humberto Henriquez Garcia"
                    height="100"
                    width="100"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde modi iste nobis, accusantium autem nostrum at quae odit
                    esse sint rerum, sed consequuntur vel ullam praesentium
                    voluptatem distinctio architecto impedit!
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-full sm:flex-row">
                <div className="flex flex-col items-center sm:w-1/3">
                  <Image
                    src="/minerva.png"
                    alt="María Inés Dávila Medina"
                    height="100"
                    width="100"
                  />
                  <h1 className="text-xl text-gray-800 font-bold">
                    Licda. MSc. María Inés Dávila Medina
                  </h1>
                  <h2 className="text-lg text-gray-500 font-bold">
                    Coordinadora de Planeación y Diseño
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero rem aliquid corporis nesciunt, modi suscipit eligendi
                    porro rerum veniam, debitis mollitia ullam quas
                    perspiciatis, vero aperiam quidem eius maiores accusantium?
                  </p>
                </div>
                <div className="flex flex-col items-center sm:w-2/3 sm:m-6">
                  <Image
                    src="/minerva.png"
                    alt="Jossue Humberto Henriquez Garcia"
                    height="100"
                    width="100"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde modi iste nobis, accusantium autem nostrum at quae odit
                    esse sint rerum, sed consequuntur vel ullam praesentium
                    voluptatem distinctio architecto impedit!
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-full sm:flex-row">
                <div className="flex flex-col items-center sm:w-1/3">
                  <Image
                    src="/minerva.png"
                    alt="Jossue Humberto Henriquez Garcia"
                    height="100"
                    width="100"
                  />
                  <h1 className="text-xl text-gray-800 font-bold">
                    Ing. MSc. Benigna Lorena Martínez de Guzmán
                  </h1>
                  <h2 className="text-lg text-gray-500 font-bold">
                    Coordinadora del procesamiento y análisis
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero rem aliquid corporis nesciunt, modi suscipit eligendi
                    porro rerum veniam, debitis mollitia ullam quas
                    perspiciatis, vero aperiam quidem eius maiores accusantium?
                  </p>
                </div>
                <div className="flex flex-col items-center sm:w-2/3 sm:m-6">
                  <Image
                    src="/minerva.png"
                    alt="Jossue Humberto Henriquez Garcia"
                    height="100"
                    width="100"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde modi iste nobis, accusantium autem nostrum at quae odit
                    esse sint rerum, sed consequuntur vel ullam praesentium
                    voluptatem distinctio architecto impedit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
