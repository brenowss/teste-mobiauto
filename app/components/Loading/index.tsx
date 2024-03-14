import { LdsRing, LdsRingChild } from './styles';

interface LoadingProps {
  customColor?: string;
}

export default function Loading({ customColor }: LoadingProps) {
  return (
    <LdsRing>
      <LdsRingChild
        data-testid="lds-ring-child"
        $customColor={customColor}
      ></LdsRingChild>
      <LdsRingChild
        data-testid="lds-ring-child"
        $customColor={customColor}
      ></LdsRingChild>
      <LdsRingChild
        data-testid="lds-ring-child"
        $customColor={customColor}
      ></LdsRingChild>
    </LdsRing>
  );
}
