import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { USERNAME_KEY } from "../constants/store-keys";

interface UserContextType {
  name: string;
  handleChangeName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");

  const loadUserName = useCallback(async () => {
    try {
      const name = await SecureStore.getItemAsync(USERNAME_KEY);
      if (name) {
        setName(name);
      }
    } catch (error) {
      console.error("Error loading user name:", error);
    }
  }, []);

  useEffect(() => {
    loadUserName();
  }, [loadUserName]);

  const handleChangeName = useCallback(async (name: string) => {
    try {
      await SecureStore.setItemAsync(USERNAME_KEY, name);
      setName(name);
    } catch (error) {
      console.error("Error saving user name:", error);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      name,
      handleChangeName,
    }),
    [name, handleChangeName]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
