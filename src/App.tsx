import { Moon } from 'lucide-react'
import { Card } from "./components/ui/card"

type AppProps = {
  children: React.ReactNode
}

const App: React.FC<AppProps> = ({children}) => {
  return (
    <div className='h-screen w-screen p-0 flex justify-center items-center'>
      <Card className="h-[95%] w-[95%] p-0 flex justify-center items-center relative">
          <Moon fill='black' className='absolute top-4 right-4 h-5 w-5 cursor-pointer' />
          {children}
      </Card>
    </div>
  )
}

export default App
