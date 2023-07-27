import { ReactNode } from 'react';
import { Container } from './styles';

interface IRootProps {
  children: ReactNode;
}

export default function Root(props: IRootProps) {
  return <Container>{props.children}</Container>;
}
