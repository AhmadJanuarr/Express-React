import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

//Membuat context untuk menyimpan status otentikasi
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get("token")
  );

  useEffect(() => {
    const handleTokenChange = () => {
      setIsAuthenticated(!!Cookies.get("token"));
    };
    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
