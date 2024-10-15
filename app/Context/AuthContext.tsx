import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setUserLogin: (user:any) => void;
  setUserLogout: () => void;
  userObject:any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [userObject,setuserObject] = useState(null);
  const setUserLogin = (user:any) => {
    setIsAuthenticated(true);
    setuserObject(user)
  };

  const setUserLogout = () => {
    setIsAuthenticated(false);
    setuserObject(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUserLogin, setUserLogout,userObject }}>
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
