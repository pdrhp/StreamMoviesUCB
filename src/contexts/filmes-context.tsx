import useAllFilmesData from "@/hooks/useAllFilmesData";
import Filme from "@/interfaces/Filme";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface FilmeContextType {
  isLoading: boolean;
  filteredFilmes?: Filme[] | undefined;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setGenerosSelected: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

interface FilmeProviderProps {
  children: ReactNode;
}

const FilmeContext = createContext<FilmeContextType | null>(null);

const FilmesProvider: React.FC<FilmeProviderProps> = ({ children }) => {
  const {data: filmes, isLoading} = useAllFilmesData();
  const [filteredFilmes, setFilteredFilmes] = useState<Filme[] | undefined>(filmes)
  const [filter, setFilter] = useState<string>('')
  const [generosSelected, setGenerosSelected] = useState<string[]>()


  useEffect(() => {
    if (filmes) {

      let filmesFiltrados = filmes;

      if(filter !== ''){
        filmesFiltrados = filmesFiltrados.filter(filme => filme.titulo && filme.titulo.toLowerCase().includes(filter.toLowerCase()));
      }

      if (generosSelected && generosSelected.length > 0){
        filmesFiltrados = filmesFiltrados.filter(filme =>
          filme.genero.some(genero => generosSelected.includes(genero))
        );
      }

      setFilteredFilmes(filmesFiltrados);
    }
  }, [filter, filmes, generosSelected])

  return (
    <FilmeContext.Provider value={{ filteredFilmes, isLoading, setFilter, setGenerosSelected }}>
      {children}
    </FilmeContext.Provider>
  );
};

const useFilmes = () => {
  const context = useContext(FilmeContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { FilmesProvider, useFilmes };

