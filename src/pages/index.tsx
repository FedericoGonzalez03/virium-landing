import { FormEvent, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/subscribe", { email });
      setMessage("¡Gracias por suscribirte!");
      setEmail("");
    } catch (error) {
      setMessage("Hubo un error. Intenta nuevamente.");
    }
  };

  return (
    <div className="
      h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-black
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-black
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      [&::-webkit-scrollbar-thumb:hover]:bg-blue-400
    ">
      <Head>
        <title>Virium - La Red Social del Futuro</title>
      </Head>

      {/* Sección 1: Introducción */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
        <h1 className="md:text-8xl text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Virium
        </h1>
        <p className="mt-4 md:text-3xl text-2xl text-gray-300 md:w-6/10 w-9/10">
          La red social que prioriza el contenido de calidad, dando visibilidad a las ideas sin importar la popularidad.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r to-blue-400 from-purple-500 mt-10 text-black font-bold p-4 md:text-xl text-lg rounded-lg hover:to-blue-300 hover:from-purple-400 transition-all"
        >
          ¡Sé el primero en probarla!
        </button>
      </section>

      {/* Sección 2: ¿Qué es Virium? */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="md:text-5xl text-3xl font-semibold text-pink-400"
      >
        ¿Qué es Virium?
      </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="md:text-2xl text-xl mt-4 text-gray-300 md:w-6/10 w-9/10 text-left"
        >
          Virium es una nueva red social que evita la superficialidad de otras plataformas. Aquí, las ideas se valoran por su impacto,
          no por la cantidad de seguidores. Sin clickbait, sin fake news, sin algoritmos injustos.
        </motion.p>
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-pink-400 text-black font-bold p-3 md:text-lg text-sm rounded-lg hover:bg-pink-300 transition-all"
        >
          No te quedes afuera, registrate ahora.
        </motion.button>
      </section>

      {/* Sección 3: Características Clave */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
        <h2 className="md:text-5xl text-3xl font-semibold text-green-400">Características Clave</h2>
        <ul className="md:text-2xl text-xl mt-4 text-gray-300 list-disc list-inside text-left">
          <li>📌 Visibilidad justa basada en la calidad del contenido.</li>
          <li className="mt-3">🚫 Sin likes ni métricas públicas para evitar validación superficial.</li>
          <li className="mt-3">📰 Filtrado de fake news y clickbait.</li>
          <li className="mt-3">💡 Espacios para ideas, propuestas y debates constructivos.</li>
          <li className="mt-3">🔒 Moderación avanzada con inteligencia artificial.</li>
        </ul>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-green-400 text-black font-bold p-3 md:text-lg text-sm rounded-lg hover:bg-green-300 transition-all"
        >
          ¡Ya quiero probarlo!
        </button>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
        <h2 className="md:text-5xl text-3xl font-semibold text-blue-400">Visibilidad e Impacto de tus Ideas</h2>
        <p className="md:text-2xl text-xl mt-4 text-gray-300 text-left md:w-6/10 w-9/10">
          En Virium, cada publicación tiene el potencial de ser vista por toda la comunidad, independientemente de la cantidad de seguidores que tengas. 
          Nuestro algoritmo prioriza la calidad del contenido sobre la popularidad. Así, tus ideas pueden llegar lejos y tener un verdadero impacto, 
          sin la necesidad de jugar con algoritmos ni depender de la fama de tu cuenta. Además, resaltamos publicaciones de calidad, desde ideas 
          innovadoras hasta propuestas destacadas, para asegurarnos que no pasen por alto.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-blue-400 text-black font-bold p-3 md:text-lg text-sm rounded-lg hover:bg-blue-300 transition-all"
        >
          Quiero destacarme
        </button>
      </section>

      {/* Sección 4: Beneficios de Unirse */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
        <h2 className="md:text-5xl text-3xl font-semibold text-yellow-400">Beneficios de Unirse</h2>
        <p className="md:text-2xl text-xl mt-4 text-gray-300 md:w-6/10 w-9/10 text-left">
          Al ser parte de Virium, podrás compartir tus ideas sin preocuparte por la fama. Obtendrás visibilidad real,
          interacción significativa y una comunidad que valora el contenido auténtico.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-yellow-400 text-black font-bold p-3 md:text-lg text-sm rounded-lg hover:bg-yellow-300 transition-all"
        >
          Unirse ahora
        </button>
      </section>

      {/* Sección fija: Formulario de suscripción */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 snap-start">
        <h2 className="md:text-5xl text-3xl font-semibold text-blue-400">¡Únete a Virium!</h2>
        <p className="md:text-2xl text-xl text-gray-300 mt-2">Sé de los primeros en probar Virium.</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 md:w-6/10 w-9/10">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-black font-bold p-3 rounded-lg hover:bg-blue-400 transition-all"
          >
            Suscribirse
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-green-400">{message}</p>}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bg-black inset-0 flex items-center justify-center">
          <div className=" p-6 bg-black rounded-lg text-center w-2/5 max-w-full min-w-75 shadow-2xl shadow-blue-400">
            <h2 className="md:text-5xl text-3xl font-semibold text-blue-400">¡Únete a Virium!</h2>
            <p className="md:text-2xl text-xl text-gray-300 mt-2">Regístrate y sé de los primeros en probar Virium.</p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-black font-bold p-3 rounded-lg hover:bg-blue-400 transition-all"
              >
                Suscribirse
              </button>
            </form>
            {message && <p className="mt-4 text-sm text-green-400">{message}</p>}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-300 hover:text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
