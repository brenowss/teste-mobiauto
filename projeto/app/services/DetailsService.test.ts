import DetailsService from './DetailsService';

describe('DetailsService', () => {
  describe('getBrands', () => {
    it('should return an array of brands', async () => {
      const brands = await DetailsService.getBrands();
      expect(Array.isArray(brands)).toBe(true);
    }, 10000);
  });

  describe('getModels', () => {
    it('should return an array of models for a given brand', async () => {
      const brandId = '8';
      const models = await DetailsService.getModels(brandId);
      expect(Array.isArray(models)).toBe(true);
    }, 10000);
  });

  describe('getYears', () => {
    it('should return an array of years for a given brand and model', async () => {
      const brandId = '8';
      const modelId = '254';
      const years = await DetailsService.getYears(brandId, modelId);
      expect(Array.isArray(years)).toBe(true);
    }, 10000);
  });

  describe('getValue', () => {
    it('should return the value for a given brand, model and year', async () => {
      const brandId = '8';
      const modelId = '254';
      const yearId = '2008-1';
      // simulating this request:
      // https://parallelum.com.br/fipe/api/v1/carros/marcas/8/modelos/254/anos/2008-1

      const value = await DetailsService.getValue(brandId, modelId, yearId);
      expect(typeof value).toBe('object');
    }, 10000);
  });
});
