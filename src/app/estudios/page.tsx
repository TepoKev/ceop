import TopBar from "../TopBar";
import db from "../../libs/db";
import Study from "../components/Study";
import { Suspense } from "react";

async function getData() {
  var studies: Array<any> = [];
  try {
    studies = await db.studies.findMany({
      select: {
        title: true,
        publishedAt: true,
        lastReviewAt: true,
        pdfName: true,
      },
    });
    console.log(studies);
  } catch (error) {
    console.error(error);
  }
  return studies;
}

const Estudios = async () => {
  const studies = await getData();
  return (
    <div>
      <TopBar />
      <div className="m2 lg:m-6">
        <h1 className="text-3xl font-bold text-center">
          DOCUMENTACIÓN DE ESTUDIOS REALIZADOS
        </h1>
        <div>
          <div className="flex flex-wrap justify-center">
            <Suspense
              fallback={
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              }
            ></Suspense>
            {studies.map((study) => {
              return (
                <Study
                  key={study.title}
                  title={study.title}
                  publishedAt={new Date(study.publishedAt).toLocaleDateString(
                    "es-ES",
                    { day: "2-digit", month: "2-digit", year: "numeric" }
                  )}
                  lastReviewAt={
                    study.lastReviewAt
                      ? new Date(study.lastReviewAt).toLocaleDateString(
                          "es-ES",
                          { day: "2-digit", month: "2-digit", year: "numeric" }
                        )
                      : null
                  }
                  pdf={process.env.PDF_PATH + study.pdfName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estudios;
