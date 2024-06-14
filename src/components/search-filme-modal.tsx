import { useFilmes } from "@/contexts/filmes-context";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

type SearchFilmeModalProps = {
    children: React.ReactNode;
}

const SearchFilmeModal: React.FC<SearchFilmeModalProps> = ({children}) => {

  const { setFilter } = useFilmes();

  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const filter = (filter: string) => {
    setFilter(filter)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      filter(search);
      setOpen(false);
    }
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[85%] h-[10%] p-0 top-40 bg-slate-950 overflow-hidden">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress} // Add this line
          className="text-3xl h-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Pesquise um filme"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchFilmeModal;
