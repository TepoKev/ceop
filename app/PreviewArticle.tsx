import Image from "next/image";

export default function PreviewArticle({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <div className="rounded overflow-hidden shadow-lg my-2 sm:m-3">
      <div className="flex justify-center w-full">
        <Image
          className="w-full sm:w-48 "
          src={image}
          alt="Sunset in the mountains"
          width="100"
          height="100"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => {
          return (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex justify-center p-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Leer más
        </button>
      </div>
    </div>
  );
}
