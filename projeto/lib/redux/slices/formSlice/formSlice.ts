import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: FormSliceState = {
  selectedBrand: '',
  selectedModel: '',
  selectedYear: '',
  value: undefined,
};

export const formSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.selectedBrand = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.selectedModel = action.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload;
    },
    setValue: (state, action: PayloadAction<ValueResponse>) => {
      state.value = action.payload;
    },
  },
});

export type ValueResponse = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};

export interface FormSliceState {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  value: ValueResponse;
}
