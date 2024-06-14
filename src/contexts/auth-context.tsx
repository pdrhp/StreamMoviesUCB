import User from "@/interfaces/User";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

interface AuthContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  logout: () => void;
  triggerBlockLogin: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [blockedLoginTry, setBlockedLoginTry] = useState<boolean>(false);
  const loggedUserString = localStorage.getItem("user");

  const triggerBlockLogin = () => {
    if (!loggedUserString) {
      setBlockedLoginTry(!blockedLoginTry);
      setBlockedLoginTry(!blockedLoginTry);
    }
  };

  useEffect(() => {
    if (loggedUserString) {
      const loggedUser: User = JSON.parse(loggedUserString);
      setUser(loggedUser);
      return;
    }
  }, []);

  useEffect(() => {
    if (blockedLoginTry) {
      toast.error("É necessario efetuar o login!", {
        style: {
          backgroundColor: "#3b0c09",
        },
        position: "top-center",
      });
    }
  }, [blockedLoginTry]);

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, triggerBlockLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };

