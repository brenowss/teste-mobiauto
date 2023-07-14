import { LdsRing, LdsRingChild } from './styles';

export default function Loading() {
  return (
    <LdsRing>
      <LdsRingChild data-testid="lds-ring-child"></LdsRingChild>
      <LdsRingChild data-testid="lds-ring-child"></LdsRingChild>
      <LdsRingChild data-testid="lds-ring-child"></LdsRingChild>
    </LdsRing>
  );
}
