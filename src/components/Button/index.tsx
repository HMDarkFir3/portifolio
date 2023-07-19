import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Button(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>;
}
