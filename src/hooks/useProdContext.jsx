import { useContext } from "react";
import { ProdContext } from "../context/DefContext.jsx";

export const useProdContext = () => {
  const context = useContext(ProdContext);
  if (!context) {
    throw new Error('useProdContext debe ser usado dentro de un ProdProvider');
  }
  return context;
};