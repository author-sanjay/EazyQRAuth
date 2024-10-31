import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  isAuthenticated: boolean;
  setUserLogin: (user: any) => void;
  setUserLogout: () => void;
  userObject: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userObject, setUserObject] = useState<any>(null);
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const savedAuthState = await AsyncStorage.getItem("isAuthenticated");
        const savedUser = await AsyncStorage.getItem("userObject");
        if (savedAuthState) setIsAuthenticated(JSON.parse(savedAuthState));
        if (savedUser) setUserObject(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load auth state", error);
      }
    };
    // loadAuthState();
  }, []);

  const setUserLogin = async (user: any) => {
    try {
      setIsAuthenticated(true);
      setUserObject(user);
      await AsyncStorage.setItem("isAuthenticated", JSON.stringify(true));
      await AsyncStorage.setItem("userObject", JSON.stringify(user));
    } catch (error) {
      console.error("Failed to save auth state", error);
    }
  };

  const setUserLogout = async () => {
    try {
      setIsAuthenticated(false);
      setUserObject(null);
      await AsyncStorage.removeItem("isAuthenticated");
      await AsyncStorage.removeItem("userObject");
    } catch (error) {
      console.error("Failed to clear auth state", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setUserLogin, setUserLogout, userObject }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
