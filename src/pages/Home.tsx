import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-8 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center">
        <div className="col-span-1 md:col-span-3 flex justify-center md:justify-end md:order-last">
          <img
            src="/images/antoine bournier.png"
            alt="Antoine Bournier"
            className="rounded-lg shadow-lg h-64 w-64 md:h-96 md:w-96 object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 col-span-1 md:col-span-3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bonjour !</h1>
          <p className="text-base md:text-lg text-gray-500">
            Je suis Antoine Bournier, développeur full stack. <br /> <br /> Mon
            objectif est de créer des interfaces et des applications utiles pour
            répondre aux besoins de la société. <br /> <br /> Cela fait aussi
            partie de vos valeurs ? Connectons-nous !
            <br />
            Mon mail : bournierantoine@gmail.com
          </p>
          <div className="flex flex-row gap-4 mt-4 justify-center md:justify-start">
            <div
              className="bg-green-500 hover:bg-green-300 hover:cursor-pointer rounded-lg p-4 mt-4 text-white font-bold"
              onClick={() => navigate("/projects")}
            >
              Mes projets
            </div>
            <div
              className="bg-white hover:bg-gray-100 hover:cursor-pointer border rounded-lg p-4 mt-4"
              onClick={() => navigate("/cv")}
            >
              Mon CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}