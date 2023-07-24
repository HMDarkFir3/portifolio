import { useNavbar } from '@/contexts/NavbarContext';

import { Container } from './styles';

export function Overlay() {
  const { isOpenMenu, onToggleMenu } = useNavbar();

  return (
    <Container className={isOpenMenu ? 'active' : ''} onClick={onToggleMenu} />
  );
}
