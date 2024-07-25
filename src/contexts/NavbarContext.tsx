'use client';

import { createContext, useState, useCallback, useContext } from 'react';

interface NavbarContextData {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
}

interface NavbarProviderProps {
  children: React.ReactNode;
}

export const NavbarContext = createContext({} as NavbarContextData);

export function NavbarProvider({ children }: NavbarProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const onToggleMenu = useCallback(
    () => setIsOpenMenu((prevState) => !prevState),
    [setIsOpenMenu],
  );

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
