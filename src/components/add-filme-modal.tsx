import { useState } from "react";
import FilmeForm from "./filme-form";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type AddFilmeModalProps = {
  children: React.ReactNode;
};

const AddFilmeModal: React.FC<AddFilmeModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-[50%] h-[95%] items-end'>
        <FilmeForm setOpenModal={setIsOpen}/>
      </DialogContent>
    </Dialog>
  );
};

export default AddFilmeModal;
