import axios from "axios";

const JSON_BIN_SECRET = import.meta.env.VITE_JSON_BIN_SECRET;
const instance = axios.create({
  baseURL: "https://api.jsonbin.io/v3/b/638d0b84a3c728450edf98a8",
  headers: { "X-Master-Key": JSON_BIN_SECRET },
});

// Récupération de toutes les tâches
export async function getAll() {
  const res = await instance.get("/latest");
  return res.data.record;
}

// Mise à jour de toutes les tâches
export async function updateAll(newTasks) {
  await instance.put("/", newTasks);
}
