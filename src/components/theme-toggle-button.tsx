import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleButtonProps = {
    className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({className}) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

  if(theme === 'light'){
    return (
        <Sun onClick={toggleTheme} fill="black" className={`h-7 w-7 cursor-pointer ${className}`} />
    )
  } else {
    return (
        <Moon onClick={toggleTheme} className={`h-7 w-7 cursor-pointer ${className}`} />
    )
  }
}

export default ThemeToggleButton