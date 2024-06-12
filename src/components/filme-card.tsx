import Filme from "@/interfaces/Filme"
import notFoundImage from '../assets/notfound.png'
import { Card, CardContent } from "./ui/card"


type FilmeCardProps = {
    filme: Filme,
    openDetails: (filme: Filme) => void
}


const FilmeCard: React.FC<FilmeCardProps> = ({filme, openDetails}) => {
  return (
    <Card onClick={() => openDetails(filme)} className="h-[40%] w-[14%] hover:w-[14.5%] hover:h-[40%] hover:bg-stone-900 transition-all cursor-pointer">
        <CardContent className="h-full w-full flex flex-col p-0">
            <img className="w-full h-[70%] p-1 object-scale-down rounded-3xl"  src={filme.poster ? filme.poster : notFoundImage} alt="filme" />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="font-bold">{filme.titulo}</h1>
                <p>{filme.ano}</p>
                <p>{filme.category}</p>
            </div>
        </CardContent>
    </Card>
  )
}

export default FilmeCard
