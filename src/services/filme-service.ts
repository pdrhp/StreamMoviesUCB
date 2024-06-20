import Filme from "@/interfaces/Filme";
import client from "./client";


export const getAllFilmes = async () => {
    const response = await client.get<Filme[]>('/movies')

    return response.data;
}


export const createFilme = async (filme: Filme) => {
    const response = await client.post('/movies', filme);

    console.log(response);

    return response.data;
}

export const updateFilme = async (filme: Filme) => {
    const response = await client.put(`/movies/${filme.id}`, filme);
    return response.data;
}

export const deleteFilme = async (id: number) => {
    const response = await client.delete(`/movies/${id}`);
    return response.data;
}
