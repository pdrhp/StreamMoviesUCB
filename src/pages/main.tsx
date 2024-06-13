import AddFilmeModal from "@/components/add-filme-modal";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden">
      <div className="w-full border-b p-2 rounded-t-lg">
        <div className="w-full flex justify-between">
          <div className="flex justify-center w-[13%] relative">
            <h1 className="responsive-title font-bold p-1">
              Stream<span className="bold text-primary">Movies</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <AddFilmeModal>
              <Button className="" variant={"outline"}>
                <Plus size={20} />
              </Button>
            </AddFilmeModal>
            <Button className="" variant={"outline"}>
              <Search size={20} />
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
