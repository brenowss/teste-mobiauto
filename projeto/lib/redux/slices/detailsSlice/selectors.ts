import type { ReduxState } from '@/lib/redux';

export const selectDetails = (state: ReduxState) => state.details;
