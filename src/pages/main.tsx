import { Outlet } from "react-router-dom"

const MainPage = () => {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden">
      <div className="w-full border-b p-2 rounded-t-lg">
        <div className="w-full">
          <div className="flex justify-center w-[13%] border border-red-500">
            <h1 className="responsive-title font-bold p-1">Stream<span className="bold text-primary">Movies</span></h1>
          </div>
        </div>
      </div>
      <div className="h-full w-full ">
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage
