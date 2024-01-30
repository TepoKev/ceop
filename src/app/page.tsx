import TopBar from "./TopBar";
import PreviewArticle from "./components/PreviewArticle";
import db from "../libs/db";
import Carousel from "./components/Carousel";

async function getData() {
  var studies: Array<any> = [];
  try {
    studies = await db.studies.findMany({
      include: {
        images: {
          select: {
            name: true,
          },
        },
        users: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
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
      <Carousel images={["/galery/clase_virtual.jpg", "/galery/elecciones2v1.jpg", "/galery/image1v2.jpeg", "/galery/image3v2.jpeg"]} />
      <div className="text-center">
        <h1 className="text-3xl font-bold">ÚLTIMAS NOVEDADES</h1>
      </div>
      <div className="flex flex-col items-center">
        {studies.map((study) => {
          return (
            <PreviewArticle
              title={study.title}
              description={study.description}
              tags={study.keywords.split(" ")}
              image={process.env.IMG_PATH+study.images.name}
              pdf={process.env.PDF_PATH+study.pdfName}
            />
          );
        })}
      </div>
    </main>
  );
}
