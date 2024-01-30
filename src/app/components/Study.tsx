function Study() {
  return (
    <div className="m-2 px-2 lg:m-4 lg:px-12">
      <div className="bg-[#6e0000] w-full text-center rounded-t-lg p-4">
        <h2 className="text-white text-lg">
          Informe sondeo sobre la inserción laboral de los graduados de la
          carrera de Ingeniería de Sistemas Informáticos{" "}
        </h2>
        <h3 className="text-sm text-gray-400">Fecha de publicación: 01/01/2024</h3>
        <h3 className="text-sm text-gray-400">Ultima revision: 30/01/2024</h3>
      </div>
      <button className="bg-yellow-400 w-full rounded-b-lg p-4">
        Descargar Informe
      </button>
    </div>
  );
}

export default Study;
