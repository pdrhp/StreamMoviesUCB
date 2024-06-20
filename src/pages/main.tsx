import AddFilmeModal from "@/components/add-filme-modal";
import SearchFilmeModal from "@/components/search-filme-modal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut, Plus, Search } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const MainPage = () => {

  const {logout} = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogoClick = () => {
    navigate('/');
    queryClient.invalidateQueries({
      queryKey: ['filmes-data']
    })
  }
  


  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden">
      <div className="w-full border-b p-2 rounded-t-lg">
        <div className="w-full flex justify-between">
          <div className="flex justify-center w-[13%] relative">
            <h1 onClick={() => handleLogoClick()} className="responsive-title font-bold p-1 cursor-pointer">
              Stream<span className="bold text-primary">Movies</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <AddFilmeModal>
              <Button className="" variant={"outline"}>
                <Plus size={20} />
              </Button>
            </AddFilmeModal>
            <SearchFilmeModal>
              <Button className="" variant={"outline"}>
                <Search size={20} />
              </Button>
            </SearchFilmeModal>
            <Button onClick={() => logout()} variant={"outline"}>
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
