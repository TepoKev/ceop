import TopBar from "../TopBar";
import db from "../../libs/db";
import Study from "../components/Study";

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
            {studies.map((study) => {
              return (
                <Study
                  title={study.title}
                  publishedAt={study.publishedAt}
                  lastReviewAt={study.lastReviewAt}
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
