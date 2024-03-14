'use client';

import { useSelector } from '../../lib/redux';
import {
  BackButton,
  Container,
  PriceBadge,
  Subtext,
  Title,
  Wrapper,
} from './styles';
import { useRouter } from 'next/navigation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function IndexPage() {
  const router = useRouter();
  const value = useSelector((state) => state.formValues.value);

  if (!value) {
    if (typeof location !== 'undefined') {
      router.push('/');
    }
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <BackButton href="/">
          <NavigateBeforeIcon />
          Voltar
        </BackButton>
        <Title>
          Tabela Fipe: Preço {value.Modelo} {value.AnoModelo}
        </Title>
        <PriceBadge $error={!!value.Valor}>
          {value.Valor || 'Não há preço disponível'}
        </PriceBadge>
        <Subtext>Este é o preço de compra do veículo</Subtext>
      </Wrapper>
    </Container>
  );
}
