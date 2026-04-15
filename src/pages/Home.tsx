import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-24">
      <div className="grid grid-cols-6 gap-8 items-center">
        <div className="flex flex-col gap-2 col-span-3">
          <h1 className="text-4xl font-bold mb-4">Bonjour !</h1>
          <p className="text-lg text-gray-500">
            Je suis Antoine Bournier, développeur full stack. <br /> <br /> Mon
            objectif est de créer des interfaces et des applications utiles pour
            répondre aux besoins de la société. <br /> <br /> Cela fait aussi
            partie de vos valeurs ? Connectons-nous !
            <br />
            Mon mail : bournierantoine@gmail.com
          </p>
          <div className="flex flex-row gap-4 mt-4">
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
        <div className="col-span-3 flex flex-row justify-end">
          <img
            src="/public/images/antoine bournier.png"
            alt="Antoine Bournier"
            className="rounded-lg shadow-lg h-96 w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
