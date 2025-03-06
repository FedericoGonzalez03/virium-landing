import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email requerido" });
  }

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      { email, listIds: [3] }, // Reemplaza TU_LISTA_ID con el ID de la lista en Brevo
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY, // Reemplaza con tu API Key de Brevo
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ message: "Suscripción exitosa" });
  } catch (error) {
    return res.status(500).json({ error: "Error al suscribirse" });
  }
}
