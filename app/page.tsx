import Card from "@components/Card";
import Button from "@components/Button";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <Card>
        <picture>
          <img
            src="./images/profile/256x256.webp"
            className="rounded-full h-24 mx-auto block grayscale"
            loading="lazy"
            alt="Duduar | Desarrollador independiente"
          />
        </picture>
        <h1 className="mt-6 font-serif text-lg text-center">
          !Hola! ✋, soy <span className="text-cyberBlue">Duduar</span>
        </h1>
        <p className="px-2.5 mt-2 text-center">
          ¿Buscas un{" "}
          <span className="underline decoration-2 decoration-neutralWhite/25">
            experto en tecnología
          </span>{" "}
          para <span className="text-cyberBlue">impulsar tu proyecto</span>?
        </p>
        <p className="px-2.5 mt-2 text-center">
          Como desarrollador independiente, mis habilidades y experiencia en{" "}
          <span className="underline decoration-2 decoration-neutralWhite/25">
            interfaz de usuario y manejo de datos
          </span>{" "}
          pueden{" "}
          <span className="text-cyberBlue">llevarlo al siguiente nivel</span>.
          ¡Contáctame ahora para saber cómo!
        </p>
      </Card>
      <div className="mt-8">
        <Button>
          Hablemos <span className="ml-1">💬</span>
        </Button>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <ChevronUpIcon className="h-6" />
        <p>Conoce más sobre mí</p>
      </div>
    </main>
  );
}
