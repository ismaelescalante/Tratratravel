import { useState, useContext, createContext } from "react";

const UserContext = createContext();

UserContext.displayName = "UserContext";

export function DatosProvider({ children }) {
  const [saveResultFinal, setSaveResultFinal] = useState("")
  return (
    <UserContext.Provider value={[saveResultFinal, setSaveResultFinal]}>
      {children}
    </UserContext.Provider>
  );
}

export default function UserConsumer() {
  return useContext(UserContext);
}