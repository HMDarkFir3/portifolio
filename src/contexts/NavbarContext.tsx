import { createContext, useState, useEffect, useContext } from "react";

interface NavbarContextData {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
}

export const NavbarContext = createContext({} as NavbarContextData);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const onToggleMenu = () => setIsOpenMenu((prevState) => !prevState);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenMenu]);

  return (
    <NavbarContext.Provider value={{ isOpenMenu, onToggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);

  return context;
}
