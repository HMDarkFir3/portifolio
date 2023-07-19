import { createContext, useState, useContext } from "react";

interface MenuContextData {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
}

export const MenuContext = createContext({} as MenuContextData);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const onToggleMenu = () => setIsOpenMenu((prevState) => !prevState);

  return (
    <MenuContext.Provider value={{ isOpenMenu, onToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
