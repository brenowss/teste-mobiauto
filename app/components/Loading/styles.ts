import { keyframes, styled } from 'styled-components';

const ldsRingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
`;

export const LdsRingChild = styled.div<{ $customColor?: string }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 12px;
  height: 12px;
  margin: 4px;
  border: 2px solid ${({ customColor }) => customColor || '#fff'};
  border-radius: 50%;
  animation: ${ldsRingAnimation} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ customColor }) => customColor || '#fff'} transparent
    transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.225s;
  }
  &:nth-child(2) {
    animation-delay: -0.15s;
  }
  &:nth-child(3) {
    animation-delay: -0.075s;
  }
`;
