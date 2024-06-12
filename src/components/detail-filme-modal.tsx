import Filme from "@/interfaces/Filme";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import FilmeDetail from "./filme-detail";
import FilmeForm from "./filme-form";
import { Dialog, DialogContent } from "./ui/dialog";

type DetailFilmeModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  filme: Filme;
};

const DetailFilmeModal: React.FC<DetailFilmeModalProps> = ({
  open,
  setOpen,
  filme,
}) => {
  const [editMode, setEditMode] = useState(false);

  const [loadingTransition, setLoadingTransition] = useState(false);

  const handleEditMode = () => {
    setLoadingTransition(true);
    setTimeout(() => {
      setEditMode(true);
      setLoadingTransition(false);
    }, 200);
  };

  const handleDismiss = (openChange: boolean) => {
    setOpen(openChange);

    setTimeout(() => {
      setEditMode(false);
      setLoadingTransition(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleDismiss}>
      <DialogContent className={`${editMode || loadingTransition ? 'w-[50%] h-[90%]' : 'w-[60%] h-[70%]'} items-end`}>
        {editMode ? (
          <FilmeForm/>
        ) : loadingTransition ? (
          <div className="w-full h-full flex items-center justify-center">
            <LoaderCircle className=" h-24 w-24 animate-spin" />
          </div>
        ) : (
          <FilmeDetail editModeFunction={handleEditMode} filme={filme} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailFilmeModal;
