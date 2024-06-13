import Filme from "@/interfaces/Filme";
import client from "./client";


export const getAllFilmes = async () => {
    const response = await client.get<Filme[]>('/movies')

    return response.data;
}

