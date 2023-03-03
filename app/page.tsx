import Card from "@components/Card";
import Button from "@components/Button";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Page() {
  return (
    <>
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
            <span className="underline decoration-2 underline-offset-2 decoration-neutralWhite/25">
              experto en tecnología
            </span>{" "}
            para <span className="text-cyberBlue">impulsar tu proyecto</span>?
            🚀.
          </p>
          <p className="px-2.5 mt-2 text-center">
            Como desarrollador independiente, mis habilidades y experiencia en{" "}
            <span className="underline decoration-2 underline-offset-2 decoration-neutralWhite/25">
              interfaz de usuario y manejo de datos
            </span>{" "}
            pueden{" "}
            <span className="text-cyberBlue">
              llevarlo al siguiente nivel 🏆
            </span>
            . ¡Contáctame ahora para saber cómo!
          </p>
        </Card>
        <Button marginTop="mt-8">
          Hablemos<span className="ml-2">💬</span>
        </Button>
        <div className="mt-8 flex flex-col items-center">
          <ChevronUpIcon className="h-6" />
          <p>Conoce más sobre mí</p>
        </div>
      </main>
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <Card>
          <h2 className="font-serif text-lg text-center underline decoration-2 underline-offset-4 decoration-cyberBlue">
            <span>Acerca de mí</span>
          </h2>
          <p className="mt-2 text-center">
            Apasionado del{" "}
            <span className="text-cyberBlue">desarrollo web</span> 💻, con{" "}
            <span className="underline decoration-2 underline-offset-2 decoration-neutralWhite/25">
              más de 5 años de experiencia
            </span>{" "}
            en el campo. Me encanta trabajar en{" "}
            <span className="underline decoration-2 underline-offset-2 decoration-neutralWhite/25">
              proyectos que desafíen mi creatividad y habilidades técnicas
            </span>
            , siempre buscando{" "}
            <span className="text-cyberBlue">soluciones innovadoras 💡</span>{" "}
            para cada cliente. Me considero un{" "}
            <span className="underline decoration-2 underline-offset-2 decoration-neutralWhite/25">
              perfeccionista que se enfoca en los detalles
            </span>{" "}
            para lograr{" "}
            <span className="text-cyberBlue">resultados de alta calidad</span>{" "}
            💯.
          </p>
        </Card>
        <Button marginTop="mt-8">
          Explora mi perfil<span className="ml-2">🔍</span>
        </Button>
        <div className="mt-8 flex flex-col items-center">
          <ChevronUpIcon className="h-6" />
          <p>¿Quieres ver lo que puedo hacer?</p>
        </div>
      </section>
    </>
  );
}
