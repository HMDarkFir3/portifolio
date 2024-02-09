'use client';

import { createContext, useState, useCallback } from 'react';

interface NavbarContextData {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
}

export const NavbarContext = createContext({} as NavbarContextData);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
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
