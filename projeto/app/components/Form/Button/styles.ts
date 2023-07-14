import { Button as MuiButton } from '@mui/material';
import { styled } from 'styled-components';

export const Button = styled(MuiButton)`
  text-transform: none !important;
  font-weight: 700 !important;
  background: #4443bc !important;
  width: 100% !important;
  max-width: 180px;
  align-items: center !important;
  gap: 0.5rem !important;
  transition: background 0.2s ease-in-out !important;

  &:disabled {
    background: #e0e0e0 !important;
    cursor: not-allowed !important;
  }
`;
