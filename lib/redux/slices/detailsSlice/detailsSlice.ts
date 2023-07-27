import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: DetailsSliceState = {
  brands: [],
  models: [],
  years: [],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<DefaultDetailResponse[]>) => {
      state.brands = action.payload?.map((brand) => ({
        value: brand.codigo,
        label: brand.nome,
      }));
    },
    setModels: (state, action: PayloadAction<DefaultDetailResponse[]>) => {
      state.models = action.payload?.map((model) => ({
        value: model.codigo,
        label: model.nome,
      }));
    },
    setYears: (state, action: PayloadAction<DefaultDetailResponse[]>) => {
      state.years = action.payload?.map((year) => ({
        value: year.codigo,
        label: year.nome,
      }));
    },
  },
});

export type DefaultDetail = {
  value: string;
  label: string;
};

export type DefaultDetailResponse = {
  codigo: string;
  nome: string;
};

export interface DetailsSliceState {
  brands: DefaultDetail[];
  models: DefaultDetail[];
  years: DefaultDetail[];
}
