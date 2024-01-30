import TopBar from "../TopBar";
import Study from "../components/Study";

const Estudios = () => {
  return (
    <div>
      <TopBar />
      <div className="m2 lg:m-6">
        <h1 className="text-3xl font-bold text-center">
          DOCUMENTACIÓN DE ESTUDIOS REALIZADOS
        </h1>
        <div>
          <Study />
          <Study />
        </div>
      </div>
    </div>
  );
};

export default Estudios;
