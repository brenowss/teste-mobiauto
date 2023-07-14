import { formSlice, FormSliceState, ValueResponse } from './formSlice';

describe('formSlice', () => {
  let initialState: FormSliceState;

  beforeEach(() => {
    initialState = {
      selectedBrand: '',
      selectedModel: '',
      selectedYear: '',
      value: undefined,
    };
  });

  it('should handle setBrand', () => {
    const brand = 'Ford';
    const action = formSlice.actions.setBrand(brand);
    const nextState = formSlice.reducer(initialState, action);
    expect(nextState.selectedBrand).toEqual(brand);
  });

  it('should handle setModel', () => {
    const model = 'Fiesta';
    const action = formSlice.actions.setModel(model);
    const nextState = formSlice.reducer(initialState, action);
    expect(nextState.selectedModel).toEqual(model);
  });

  it('should handle setYear', () => {
    const year = '2020';
    const action = formSlice.actions.setYear(year);
    const nextState = formSlice.reducer(initialState, action);
    expect(nextState.selectedYear).toEqual(year);
  });

  it('should handle setValue', () => {
    const value: ValueResponse = {
      TipoVeiculo: 1,
      Valor: 'R$ 50.000,00',
      Marca: 'Ford',
      Modelo: 'Fiesta',
      AnoModelo: 2020,
      Combustivel: 'Gasolina',
      CodigoFipe: '123456',
      MesReferencia: 'Janeiro de 2021',
      SiglaCombustivel: 'G',
    };
    const action = formSlice.actions.setValue(value);
    const nextState = formSlice.reducer(initialState, action);
    expect(nextState.value).toEqual(value);
  });
});
