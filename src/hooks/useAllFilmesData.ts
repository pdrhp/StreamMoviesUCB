
import { getAllFilmes } from "@/services/filme-service";
import { useQuery } from "@tanstack/react-query";

function useAllFilmesData(){
    const query = useQuery({
        queryFn: getAllFilmes,
        queryKey: ['filmes-data']
    }) 


    return query;
}


export default useAllFilmesData;



