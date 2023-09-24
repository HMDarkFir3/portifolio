import { useContext } from 'react';

import { NavbarContext } from '@/contexts/NavbarContext';

export function useNavbar() {
  const context = useContext(NavbarContext);

  return context;
}
