import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from 'styled-components';
import { ArrowDown } from 'react-feather';

import { Container } from './styles';

interface Props {
  to: string;
}

export function ScrollDownButton(props: Props) {
  const { to } = props;

  const { colors } = useTheme();

  return (
    <ScrollLink
      className="scrollLink"
      to={to}
      spy={true}
      smooth={true}
      offset={-88}
      duration={500}
    >
      <Container>
        <div className="scroll">
          <div className="scrollBar" />
        </div>
        <span>Scroll Down</span>
        <ArrowDown size={16} color={colors.primary600} />
      </Container>
    </ScrollLink>
  );
}
