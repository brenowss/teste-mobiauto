import Loading from '../../../Loading';
import { Container } from './styles';

export default function Loader() {
  // esse componente é um loader que é utilizado no componente Select
  // com algumas personalizações
  return (
    <Container>
      <Loading customColor={'#a4a4a4'} />
    </Container>
  );
}
