import { saveFilme } from "@/services/filme-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useSaveFilme(){

    const queryc = useQueryClient();

    const mutate = useMutation({
        mutationFn: saveFilme,
        onSuccess: () => {
            queryc.invalidateQueries({
                queryKey: ['filmes-data'],
            })
        }
    })

    return mutate;
}