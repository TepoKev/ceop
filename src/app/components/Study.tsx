import Link from "next/link";

interface StudyProps {
  title: string;
  publishedAt: string;
  lastReviewAt: string;
  pdf: string;
}

function Study({title, publishedAt, lastReviewAt, pdf}: StudyProps) {
  return (
    <div className="m-2 px-2 lg:m-4 lg:px-12">
      <div className="bg-[#6e0000] w-full text-center rounded-t-lg p-4">
        <h2 className="text-white text-lg">
          {title}
        </h2>
        <h3 className="text-sm text-gray-400">Fecha de publicación: {publishedAt}</h3>
        <h3 className="text-sm text-gray-400">Ultima revision: {lastReviewAt}</h3>
      </div>
      <Link className="bg-yellow-400 w-full rounded-b-lg p-4" href={pdf} target="_blank">
        Descargar Informe
      </Link>
    </div>
  );
}

export default Study;
