interface Filme  {
    id?: string,
    titulo: string | null,
    ano: number,
    duracaoEmMinutos: number,
    genero: string[],
    diretor: string | null,
    roteiristas: string[],
    atores: string[],
    poster: string | null,
    metascore: number,
    videoUrl: string | null,
    category: string | null
}



export default Filme;