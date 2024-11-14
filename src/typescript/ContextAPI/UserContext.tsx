import { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context
interface AppContextType {
  count: number;
  incre: () => void;
  decre: () => void;
}

// Create the context with an initial value of undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the props for the AppProvider
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  return (
    <AppContext.Provider value={{ incre, decre, count }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
const useGlobelContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobelContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useGlobelContext };

