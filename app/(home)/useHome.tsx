import { useEffect, useState } from 'react';

import DetailsService from '../services/DetailsService';
import {
  detailsSlice,
  formSlice,
  useDispatch,
  useSelector,
} from '../../lib/redux';
import { useRouter } from 'next/navigation';
import toast from '../../utils/toast';

const useHome = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.details.brands);
  const models = useSelector((state) => state.details.models);
  const years = useSelector((state) => state.details.years);
  const formValues = useSelector((state) => state.formValues);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [isLoadingBrands, setIsLoadingBrands] = useState(false);
  const [isLoadingModels, setIsLoadingModels] = useState(false);
  const [isLoadingYears, setIsLoadingYears] = useState(false);

  async function fetchBrands() {
    try {
      setIsLoadingBrands(true);
      const brandsList = await DetailsService.getBrands();
      dispatch(detailsSlice.actions.setBrands(brandsList));
      setIsLoadingBrands(false);
    } catch (error) {
      console.error(error);
      toast({
        text: 'Erro ao buscar marcas',
        type: 'error',
        time: 5000,
      });
    }
  }

  async function fetchModels(brandId: string) {
    try {
      setIsLoadingModels(true);
      const modelsList = await DetailsService.getModels(brandId);
      dispatch(detailsSlice.actions.setModels(modelsList));
      dispatch(formSlice.actions.setYear(''));
      dispatch(detailsSlice.actions.setYears([]));
      setIsLoadingModels(false);
    } catch (error) {
      console.error(error);
      toast({
        text: 'Erro ao buscar modelos',
        type: 'error',
        time: 5000,
      });
    }
  }

  async function fetchYears(brandId: string, modelId: string) {
    try {
      setIsLoadingYears(true);
      const yearsList = await DetailsService.getYears(brandId, modelId);
      dispatch(detailsSlice.actions.setYears(yearsList));
      setIsLoadingYears(false);
    } catch (error) {
      console.error(error);
      toast({
        text: 'Erro ao buscar anos do modelo selecionado',
        type: 'error',
        time: 5000,
      });
    }
  }

  async function fetchValue(brandId: string, modelId: string, yearId: string) {
    try {
      const value = await DetailsService.getValue(brandId, modelId, yearId);
      dispatch(formSlice.actions.setValue(value));
      return value;
    } catch (error) {
      console.error(error);
      toast({
        text: 'Erro ao buscar valor do veículo',
        type: 'error',
        time: 5000,
      });
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
      setIsSubmitting(true);

      const response = await fetchValue(
        formValues.selectedBrand,
        formValues.selectedModel,
        formValues.selectedYear
      );

      if (typeof location !== 'undefined' && response.Valor) {
        router.push('/result');
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const isButtonDisabled =
    (formValues.selectedBrand &&
      formValues.selectedModel &&
      formValues.selectedYear) ||
    isSubmitting;

  useEffect(() => {
    if (!brands || !brands.length) {
      fetchBrands();
    }
  }, []);

  return {
    brands,
    models,
    years,
    formValues,
    isSubmitting,
    isLoadingBrands,
    isLoadingModels,
    isLoadingYears,
    handleChangeBrand,
    handleChangeModel,
    handleChangeYear,
    handleSubmit,
    isButtonDisabled,
  };
};

export default useHome;
