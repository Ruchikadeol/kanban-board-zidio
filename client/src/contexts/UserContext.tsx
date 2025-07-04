import { User } from "@src/types";
import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "sonner";

type UserContextType = {
  user: User | undefined;
  updateUser: (user: User | undefined) => void;
  logout: () => void;
};

const initialContext: UserContextType = {
  user: undefined,
  updateUser: () => {},
  logout: () => {},
};

// User Context to easily share user state between components
export const UserContext = createContext<UserContextType>(initialContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(
    () => JSON.parse(localStorage.getItem("user")!) || undefined
  );

  const updateUser = (user: User | undefined) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = async () => {
    const response = await axios.get("/api/auth/logout").catch((error) => {
      console.log(error.message);
      toast.error("Error logging out");
    });

    if (response && response.data) {
      toast.success("Logged out successfully");
      // Clear local storage
      localStorage.removeItem("user");
      setUser(undefined);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
