import { ReactNode } from 'react';
import { Align, Container } from './styles';

interface IBodyProps {
  children: ReactNode;
  align?: Align;
}

export default function Body({ align = 'left', ...props }: IBodyProps) {
  return (
    <Container data-testid="FormBodyContainer" $align={align}>
      {props.children}
    </Container>
  );
}
