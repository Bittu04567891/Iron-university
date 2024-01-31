// AppContext.jsx
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{ user, setUser, amount, setAmount, products, setProducts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
