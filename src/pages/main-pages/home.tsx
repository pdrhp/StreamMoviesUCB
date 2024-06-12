import DetailFilmeModal from "@/components/detail-filme-modal"
import FilmeCard from "@/components/filme-card"
import Filme, { Filmes } from "@/interfaces/Filme"
import { useState } from "react"

const HomePage = () => {

  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedFilme, setSelectedFilme] = useState({} as Filme)

  const handleOpenDetailModal = (filme: Filme) => {
    setSelectedFilme(filme)
    setDetailModalOpen(true)
  }

  return (
    <div className="w-full h-full p-4 flex flex-wrap justify-center gap-7 overflow-auto">
      {Filmes.map((filme, index) => (
        <FilmeCard key={index} filme={filme} openDetails={handleOpenDetailModal}/>
      ))}
      <DetailFilmeModal open={detailModalOpen} setOpen={setDetailModalOpen} filme={selectedFilme}/>
    </div>
  )
}

export default HomePage