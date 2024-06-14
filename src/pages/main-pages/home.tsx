import DetailFilmeModal from "@/components/detail-filme-modal"
import FilmeCard from "@/components/filme-card"
import { useFilmes } from "@/contexts/filmes-context"
import Filme from "@/interfaces/Filme"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"

const HomePage = () => {

  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedFilme, setSelectedFilme] = useState({} as Filme)
  const {filteredFilmes, isLoading} = useFilmes();
  

  const handleOpenDetailModal = (filme: Filme) => {
    setSelectedFilme(filme)
    setDetailModalOpen(true)
  }

  return (
    <div className="w-full h-full p-4 flex flex-wrap justify-center gap-7 overflow-auto">
      {filteredFilmes && filteredFilmes.map((filme, index) => (
        <FilmeCard key={index} filme={filme} openDetails={handleOpenDetailModal}/>
      ))}
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderCircle size={64} className=" animate-spin" />
        </div>
      )}
      <DetailFilmeModal open={detailModalOpen} setOpen={setDetailModalOpen} filme={selectedFilme}/>
    </div>
  )
}

export default HomePage