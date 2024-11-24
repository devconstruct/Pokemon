import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
    //esta URL sirve para señalar que muestre 20 pokemon en la primera pagina empezando con el 0
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
