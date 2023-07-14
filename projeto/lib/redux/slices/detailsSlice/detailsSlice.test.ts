import { configureStore } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { detailsSlice, DetailsSliceState } from './detailsSlice';

const mockApiResponse = [
  { codigo: '1', nome: 'Brand 1' },
  { codigo: '2', nome: 'Brand 2' },
];

const mockApiFunction = async () => mockApiResponse;

const mockStore = configureStore({
  reducer: {
    details: detailsSlice.reducer,
  },
});

describe('detailsSlice', () => {
  it('should set brands when setBrands is called', () => {
    mockStore.dispatch(detailsSlice.actions.setBrands(mockApiResponse));
    const state = mockStore.getState().details as DetailsSliceState;
    expect(state.brands).toEqual([
      { value: '1', label: 'Brand 1' },
      { value: '2', label: 'Brand 2' },
    ]);
  });

  it('should set models when setModels is called', () => {
    mockStore.dispatch(detailsSlice.actions.setModels(mockApiResponse));
    const state = mockStore.getState().details as DetailsSliceState;
    expect(state.models).toEqual([
      { value: '1', label: 'Brand 1' },
      { value: '2', label: 'Brand 2' },
    ]);
  });

  it('should set years when setYears is called', () => {
    mockStore.dispatch(detailsSlice.actions.setYears(mockApiResponse));
    const state = mockStore.getState().details as DetailsSliceState;
    expect(state.years).toEqual([
      { value: '1', label: 'Brand 1' },
      { value: '2', label: 'Brand 2' },
    ]);
  });

  it('should fetch brands when fetchBrands is called', async () => {
    const mockAsyncThunk = createAsyncThunk('details/fetchBrands', async () => {
      return mockApiFunction();
    });
    await mockStore.dispatch(mockAsyncThunk());
    const state = mockStore.getState().details as DetailsSliceState;
    expect(state.brands).toEqual([
      { value: '1', label: 'Brand 1' },
      { value: '2', label: 'Brand 2' },
    ]);
  });
});
