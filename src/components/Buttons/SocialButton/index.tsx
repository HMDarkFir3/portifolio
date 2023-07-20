import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props {
  href: string;
  icon: React.ElementType;
}

export function SocialButton(props: Props) {
  const { href, icon: Icon } = props;

  const { colors } = useTheme();

  return (
    <Container href={href}>
      <Icon size={24} color={colors.primary600} />
      <div className="bar" />
    </Container>
  );
}
