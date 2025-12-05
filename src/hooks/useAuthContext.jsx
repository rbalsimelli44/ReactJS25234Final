import { useContext } from "react";
import { AuthContext } from "../context/DefContext.jsx";

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  }
  return context;
};