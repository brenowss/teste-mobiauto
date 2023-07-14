import type { ReduxState } from '@/lib/redux';

export const selectFormValues = (state: ReduxState) => state.formValues;
