import { Container, Subtitle, Title } from './styles';

interface IHeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header(props: IHeaderProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
    </Container>
  );
}
