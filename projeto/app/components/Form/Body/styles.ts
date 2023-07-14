import { styled } from 'styled-components';

export type Align = 'left' | 'center' | 'right';

export const Container = styled.div<{ $align: Align }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align};
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
`;
