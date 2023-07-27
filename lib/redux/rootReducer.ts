import { detailsSlice, formSlice } from './slices';

export const reducer = {
  details: detailsSlice.reducer,
  formValues: formSlice.reducer,
};
