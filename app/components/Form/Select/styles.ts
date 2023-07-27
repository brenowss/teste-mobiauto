import { styled } from 'styled-components';

import { Select as MuiSelect } from '@mui/material';

export const Select = styled(MuiSelect)<{ $animateOnMount: boolean }>`
  text-align: left;

  animation: ${({ $animateOnMount }) =>
    $animateOnMount ? 'fadeIn 0.5s ease-in-out' : 'none'};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
