import HttpClient from './utils/HttpClient';

class DetailsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(
      'https://parallelum.com.br/fipe/api/v1/carros/'
    );
  }

  async getBrands() {
    return this.httpClient.get(`marcas`);
  }

  async getModels(brandId: string) {
    return this.httpClient.get(`marcas/${brandId}/modelos`).then((response) => {
      return response.modelos;
    });
  }

  async getYears(brandId: string, modelId: string) {
    return this.httpClient.get(`marcas/${brandId}/modelos/${modelId}/anos`);
  }

  async getValue(brandId: string, modelId: string, yearId: string) {
    return this.httpClient.get(
      `marcas/${brandId}/modelos/${modelId}/anos/${yearId}`
    );
  }
}

export default new DetailsService();
