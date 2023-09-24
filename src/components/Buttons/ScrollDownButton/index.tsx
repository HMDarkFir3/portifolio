import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from 'styled-components';
import { ArrowDown } from 'react-feather';

import { HEADER_HEIGHT } from '@/utils/constants';

import { Container } from './styles';

interface Props {
  to: string;
}

export function ScrollDownButton(props: Props) {
  const { to } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <ScrollLink
        className="scrollLink"
        to={to}
        spy={true}
        smooth={true}
        offset={-HEADER_HEIGHT}
        duration={500}
      >
        <div className="scroll">
          <div className="scrollBar" />
        </div>
        <span>Scroll Down</span>
        <ArrowDown size={16} color={colors.primary600} />
      </ScrollLink>
    </Container>
  );
}
