import Image from "next/image";
import Link from "next/link";

export default function PreviewArticle({
  title,
  description,
  image,
  tags,
  pdf
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  pdf: string;
}) {
  return (
    <div className="rounded overflow-hidden shadow-lg my-2 sm:m-3">
      <div className="flex justify-center">
        <Image
          className="rounded-sm"
          src={image}
          alt="Sunset in the mountains"
          width="700"
          height="700"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => {
          return (
            <span key={'key'+tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex justify-center p-6">
        <Link href={pdf} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Descargar PDF
        </Link>
      </div>
    </div>
  );
}
