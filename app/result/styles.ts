import { styled } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  gap: 1rem;
  background: rgb(224, 243, 241);
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #424242;
  margin: 0;
  text-align: center;
`;

export const PriceBadge = styled.h2<{ $error: boolean }>`
  color: rgb(255, 255, 255);
  width: fit-content;
  text-align: center;
  background-color: ${({ $error }) => (!$error ? '#333' : 'rgb(0, 180, 170)')};
  margin: 32px auto 16px;
  padding: 8px 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  border-radius: 50px;
`;

export const BackButton = styled(Link)`
  color: #424242;
  text-align: left;
  display: flex;
  align-items: center;
  line-height: 18px;
`;

export const Subtext = styled.p`
  font-size: 1rem;
  color: #757575;
  margin: 0;
  text-align: center;
`;
