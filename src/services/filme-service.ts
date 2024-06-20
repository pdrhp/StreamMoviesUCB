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

export const deleteFilme = async (id: string) => {
    const response = await client.delete(`/movies/${id}`);

    return response.data;
}
