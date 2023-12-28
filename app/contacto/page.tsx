import TopBar from "../TopBar";

const Contacto = () => {
  return (
    <>
      <TopBar />
      <div className="text-center font-bold m-7">
        <h1 className="text-3xl">CONTACTOS INSTITUCIONALES</h1>
      </div>
      <div className="flex flex-col items-center text-white font-bold text-sm sm:text-2xl">
        <div className="text-center bg-slate-600 rounded-sm p-5 m-5 w-11/12">
          <div>Universidad de El Salvador</div>
          <div>Teléfono: (+503) 2511-2000</div>
          <div>Redes Sociales</div>
          <div></div>
        </div>
        <div className="text-center bg-slate-600 rounded-sm p-5 m-5 w-11/12">
          <div>
            Centro de Estudios de Opinión Pública - Facultad Multidisciplinaria
            Paracentral
          </div>
          <div>Teléfono: (+503) 2393-1992</div>
          <div>Fax: 2393-4752</div>
          <div>
            Dirección: Final Avenida Cresencio Miranda, frente a Estadio Jiboa,
            a la par de Cruz Roja Salvadoreña. San Vicente, El Salvador
          </div>
          <div>Correo Electrónico: ceop.fmp@ues.edu.sv</div>
        </div>
        <div className="text-center bg-slate-600 rounded-sm p-5 m-5 w-11/12">
          <div>Académica Paracentral - UES</div>
          <div>Teléfono: (+503) 2393-1993</div>
          <div>Redes Sociales</div>
          <div></div>
        </div>
        <div className="text-center bg-slate-600 rounded-sm p-5 m-5 w-11/12">
          <div>Proyección Social Paracentral - UES</div>
          <div>Redes Sociales</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
