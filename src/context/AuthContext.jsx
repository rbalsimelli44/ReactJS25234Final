import React, { useState } from "react";
import { AuthContext } from "./DefContext";
// import React, { createContext, useContext, useState, useEffect } from "react";


// Crear el contexto de autenticación
// export const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
  // const [usuario, setUsuario] = useState(null);
  const [usuario, setUsuario] = useState(() => {
    const token = localStorage.getItem("authToken");
    const emailGuardado = localStorage.getItem("authEmail");

  // Verificar token al cargar la aplicación
  if (!token) return null;

    return {
      nombre: token.replace("fake-token-", ""),
      email: emailGuardado || "",
    };
  });
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   const emailGuardado = localStorage.getItem("authEmail");
  //   if (token) {
  //     const username = token.replace("fake-token-", "");
  //     setUsuario({
  //       nombre: username,
  //       email: emailGuardado || "",
  //     });
  //   }
  // }, []);

  // Función para iniciar sesión
  const iniciarSesion = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);

    const emailGuardado = localStorage.getItem("authEmail");
    setUsuario({
      nombre: username,
      email: emailGuardado || "",
    });
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    setUsuario(null);
  };

  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
    isAuthenticated: !!usuario, // ← Propiedad computada
    esAdmin: usuario?.nombre === 'admin', 

  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
// export function useAuthContext() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuthContext debe usarse dentro de AuthProvider");
//   }
//   return context;
// }