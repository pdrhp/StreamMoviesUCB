import useAllFilmesData from "@/hooks/useAllFilmesData";
import Filme from "@/interfaces/Filme";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface FilmeContextType {
  isLoading: boolean;
  filteredFilmes?: Filme[] | undefined;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface FilmeProviderProps {
  children: ReactNode;
}

const FilmeContext = createContext<FilmeContextType | null>(null);

const FilmesProvider: React.FC<FilmeProviderProps> = ({ children }) => {
  const {data: filmes, isLoading} = useAllFilmesData();
  const [filteredFilmes, setFilteredFilmes] = useState<Filme[] | undefined>(filmes)
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    if (filmes) {
      if (filter === '') {
        setFilteredFilmes(filmes)
      } else {
        setFilteredFilmes(filmes.filter(filme => filme.titulo && filme.titulo.toLowerCase().includes(filter.toLowerCase())))
      }
    }
  }, [filter, filmes])

  return (
    <FilmeContext.Provider value={{ filteredFilmes, isLoading, setFilter }}>
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

