'use client';
import { Form } from '../components/Form';
import { Container } from './styles';
import useHome from './useHome';

export default function IndexPage() {
  const {
    brands,
    models,
    years,
    formValues,
    isButtonDisabled,
    isSubmitting,
    isLoadingBrands,
    isLoadingModels,
    isLoadingYears,
    handleChangeBrand,
    handleChangeModel,
    handleChangeYear,
    handleSubmit,
  } = useHome();

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
            isLoading={isLoadingBrands}
          />
          <Form.Select
            label="Modelos"
            options={models}
            value={formValues.selectedModel}
            onChange={handleChangeModel}
            disabled={!formValues.selectedBrand || !models}
            isLoading={isLoadingModels}
          />
          {formValues.selectedModel && (
            <Form.Select
              label="Anos"
              options={years}
              value={formValues.selectedYear}
              onChange={handleChangeYear}
              animateOnMount
              disabled={!formValues.selectedModel || !years}
              isLoading={isLoadingYears}
            />
          )}
          <Form.Button
            onClick={handleSubmit}
            disabled={!isButtonDisabled}
            loading={isSubmitting}
          >
            Consultar preço
          </Form.Button>
        </Form.Body>
      </Form.Root>
    </Container>
  );
}
