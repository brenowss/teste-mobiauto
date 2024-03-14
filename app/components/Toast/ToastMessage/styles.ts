import { ToastType } from '@/utils/toast';
import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const containerVariant = {
  success: css`
    background: #51ca73;
  `,
  error: css`
    background: #fc5151;
  `,
  default: css`
    background: #5061fc;
  `,
};

export const Container = styled.div<{ type?: ToastType }>`
  padding: 16px 32px;
  background: #5061fc;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  animation: ${slideUp} 0.3s ease;

  ${({ type }) => containerVariant[type || 'default']}

  & + & {
    margin-top: 12px;
  }
`;
