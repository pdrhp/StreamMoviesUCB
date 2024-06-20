import DetailFilmeModal from "@/components/detail-filme-modal";
import FilmeCard from "@/components/filme-card";
import { Toggle } from "@/components/ui/toggle";
import { GENEROS } from "@/constants/generos";
import { useFilmes } from "@/contexts/filmes-context";
import Filme from "@/interfaces/Filme";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState({} as Filme);
  const { filteredFilmes, isLoading, setGenerosSelected } = useFilmes();
  const [selectedGeneros, setSelectedGeneros] = useState<string[]>([]);


  
  const handleGenerosClick = (genero: string) => {
    if(selectedGeneros.includes(genero)){
      console.log('true isso existe')
      const newGeneros = selectedGeneros.filter(g => g !== genero);

      setSelectedGeneros(newGeneros)
      return;
    }

    setSelectedGeneros([...selectedGeneros, genero])
  }

  useEffect(() => {
    setGenerosSelected(selectedGeneros)
  }, [selectedGeneros, setGenerosSelected])


  const handleOpenDetailModal = (filme: Filme) => {
    setSelectedFilme(filme);
    setDetailModalOpen(true);
  };

  return (
    <div className="w-full h-full p-1 flex flex-col flex-wrap overflow-auto">
      <div className="w-full h-[5%] gap-2 flex justify-center overflow-x-auto items-center">
        {GENEROS.map((genero, index) => (
          <Toggle
            key={index}
            defaultChecked={selectedGeneros.includes(genero)}
            onClick={() => handleGenerosClick(genero)}
          >
            <span>{genero}</span>
          </Toggle>
        ))}
      </div>
      <div className="w-full h-[84%] border-t p-4 flex flex-wrap justify-center gap-7 overflow-auto">
        {filteredFilmes &&
          filteredFilmes.map((filme, index) => (
            <FilmeCard
              key={index}
              filme={filme}
              openDetails={handleOpenDetailModal}
            />
          ))}
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <LoaderCircle size={64} className=" animate-spin" />
          </div>
        )}
      </div>

      <DetailFilmeModal
        open={detailModalOpen}
        setOpen={setDetailModalOpen}
        filme={selectedFilme}
      />
    </div>
  );
};

export default HomePage;
