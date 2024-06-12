import Filme from "@/interfaces/Filme";
import { Pencil, X } from "lucide-react";
import React from "react";
import notFoundImage from "../assets/no-img.jpg";
import ConfirmActionDialog from "./confirm-action-dialog";
import FieldTitleValue from "./field-title-value";
import { Button } from "./ui/button";

type FilmeDetailProps = {
  filme: Filme;
  editModeFunction: () => void;
};

const FilmeDetail: React.FC<FilmeDetailProps> = ({ filme, editModeFunction }) => {
  return (
    <div className="h-[98%] max-h-[38rem] rounded-md flex">
      <div className="w-[70%] p-2 flex flex-col">
        <div className="h-[10%] w-full flex  gap-3">
          <Button variant={"outline"} onClick={() => editModeFunction()} className="h-12 w-12">
            <Pencil className="h-6 w-6" />
          </Button>
          <ConfirmActionDialog>
            <Button variant={"outline"} className="h-12 w-12">
              <X className="h-6 w-6" />
            </Button>
          </ConfirmActionDialog>
        </div>
        <div className="h-[90%] flex flex-col gap-2 flex-wrap ">
          <FieldTitleValue title="Titulo" value={filme.titulo} />
          <FieldTitleValue title="Ano" value={filme.ano} />
          <FieldTitleValue title="Genêro" value={filme.genero} />
          <FieldTitleValue title="Diretor" value={filme.diretor} />
          <FieldTitleValue title="Roteiristas" value={filme.roteiristas} />
          <FieldTitleValue title="Elenco" value={filme.atores} />
          <FieldTitleValue title="Nota Metascore" value={filme.metascore} />
          <FieldTitleValue title="Categoria" value={filme.category} />
        </div>
      </div>
      <div className=" border-l flex-1 flex items-center px-1 justify-center">
        <img
          className="w-[95%] rounded-lg h-[95%] object-cover"
          src={filme.poster ? filme.poster : notFoundImage}
          alt="filme"
        />
      </div>
    </div>
  );
};

export default FilmeDetail;
