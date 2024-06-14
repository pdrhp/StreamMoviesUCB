import { useEffect } from "react";
import ThemeToggleButton from "./components/theme-toggle-button";
import { Card } from "./components/ui/card";
import { Toaster } from "./components/ui/sonner";

type AppProps = {
  children: React.ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {

  useEffect(() => {
    const html = document.querySelector('html');
    html?.classList.add('dark')
  }, [])

  return (
    <div className="h-screen w-screen p-0 flex justify-center items-center dark">
      <Card className="h-[95%] w-[95%] p-0 flex justify-center items-center relative shadow-lg">
        {/* <Moon fill='black' className='absolute top-3 right-4 h-5 w-5 cursor-pointer' /> */}
        <ThemeToggleButton className="absolute top-3 right-4 hidden" />
        {children}
        <Toaster/>
      </Card>
    </div>
  );
};

export default App;
