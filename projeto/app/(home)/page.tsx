'use client';
import { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import { Container } from './styles';
import DetailsService from '../services/DetailsService';
import {
  detailsSlice,
  formSlice,
  useDispatch,
  useSelector,
} from '../../lib/redux';
import { useRouter } from 'next/navigation';

export default function IndexPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.details.brands);
  const models = useSelector((state) => state.details.models);
  const years = useSelector((state) => state.details.years);
  const formValues = useSelector((state) => state.formValues);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchBrands() {
    try {
      const brandsList = await DetailsService.getBrands();
      dispatch(detailsSlice.actions.setBrands(brandsList));
    } catch (error) {
      console.error('Caiu no catch', error);
    }
  }

  async function fetchModels(brandId: string) {
    try {
      const modelsList = await DetailsService.getModels(brandId);
      dispatch(detailsSlice.actions.setModels(modelsList));
      dispatch(formSlice.actions.setYear(''));
      dispatch(detailsSlice.actions.setYears([]));
    } catch (error) {
      console.error('Caiu no catch', error);
    }
  }

  async function fetchYears(brandId: string, modelId: string) {
    try {
      const yearsList = await DetailsService.getYears(brandId, modelId);
      dispatch(detailsSlice.actions.setYears(yearsList));
    } catch (error) {
      console.error('Caiu no catch', error);
    }
  }

  async function fetchValue(brandId: string, modelId: string, yearId: string) {
    try {
      const value = await DetailsService.getValue(brandId, modelId, yearId);
      dispatch(formSlice.actions.setValue(value));
    } catch (error) {
      console.error('Caiu no catch', error);
    }
  }

  const handleChangeBrand = (value: string) => {
    dispatch(formSlice.actions.setBrand(value));
    dispatch(detailsSlice.actions.setModels([]));
    dispatch(formSlice.actions.setModel(''));
    dispatch(detailsSlice.actions.setYears([]));
    dispatch(formSlice.actions.setYear(''));
    fetchModels(value);
  };

  const handleChangeModel = (value: string) => {
    dispatch(formSlice.actions.setModel(value));
    dispatch(detailsSlice.actions.setYears([]));
    dispatch(formSlice.actions.setYear(''));
    fetchYears(formValues.selectedBrand, value);
  };

  const handleChangeYear = (value: string) => {
    dispatch(formSlice.actions.setYear(value));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await fetchValue(
        formValues.selectedBrand,
        formValues.selectedModel,
        formValues.selectedYear
      );
    } catch (error) {
      console.error('Caiu no catch', error);
    } finally {
      setIsLoading(false);
      router.push('/result');
    }
  };

  const isButtonDisabled =
    (formValues.selectedBrand &&
      formValues.selectedModel &&
      formValues.selectedYear) ||
    isLoading;

  useEffect(() => {
    if (!brands || !brands.length) {
      fetchBrands();
    }
  }, []);

  return (
    <Container>
      <Form.Root>
        <Form.Header
          title="Tabela FIPE"
          subtitle="Consulte o valor de um veículo de forma gratuita"
        />
        <Form.Body align="center">
          <Form.Select
            label="Marca"
            options={brands}
            value={formValues.selectedBrand}
            onChange={handleChangeBrand}
            disabled={!brands}
          />
          <Form.Select
            label="Modelos"
            options={models}
            value={formValues.selectedModel}
            onChange={handleChangeModel}
            disabled={!formValues.selectedBrand || !models}
          />
          {formValues.selectedModel && (
            <Form.Select
              label="Anos"
              options={years}
              value={formValues.selectedYear}
              onChange={handleChangeYear}
              animateOnMount
              disabled={!formValues.selectedModel || !years}
            />
          )}
          <Form.Button
            onClick={handleSubmit}
            disabled={!isButtonDisabled}
            loading={isLoading}
          >
            Consultar preço
          </Form.Button>
        </Form.Body>
      </Form.Root>
    </Container>
  );
}
