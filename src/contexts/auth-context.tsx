import User from "@/interfaces/User";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);



const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | undefined>(undefined);


    const logout = () => {
      setUser(undefined);
      localStorage.removeItem('user');
    }

    return (
      <AuthContext.Provider value={{ user, setUser, logout}}>
        {children}
      </AuthContext.Provider>
         
    )
}



const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };







