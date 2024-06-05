import TopBar from "./TopBar";
import PreviewArticle from "./components/PreviewArticle";
import db from "../libs/db";
import Carousel from "./components/Carousel";
import { Suspense } from "react";

async function getData() {
  var studies: Array<any> = [];
  try {
    studies = await db.studies.findMany({
      where: {
        highlighted: true,
      },
      include: {
        images: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(studies);
  } catch (error) {
    console.error(error);
  }
  return studies;
}

export default async function Home() {
  const studies = await getData();
  return (
    <main>
      <TopBar />
      <Carousel
        images={[
          "/galery/clase_virtual.jpg",
          "/galery/elecciones2v1.jpg",
          "/galery/image1v2.jpeg",
          "/galery/image3v2.jpeg",
        ]}
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold">ÚLTIMAS NOVEDADES</h1>
      </div>
      <div className="flex flex-col items-center">
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
        >
          {studies.map((study) => {
            return (
              <PreviewArticle
                title={study.title}
                description={study.description}
                tags={study.keywords.split(",")}
                image={process.env.IMG_PATH + study.images.name}
                pdf={process.env.PDF_PATH + study.pdfName}
              />
            );
          })}
        </Suspense>
      </div>
    </main>
  );
}
