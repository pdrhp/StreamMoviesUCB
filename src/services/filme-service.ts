import Filme from "@/interfaces/Filme";
import client from "./client";


export const getAllFilmes = async () => {
    const response = await client.get<Filme[]>('/movies')

    return response.data;
}





export const saveFilme = async (filme: Filme) => {
    const response = await client.post('/movies', filme);

    console.log(response);

    return response.data;
}
