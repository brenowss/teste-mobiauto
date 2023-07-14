import { ReactNode } from 'react';
import { Button as ButtonComponent } from './styles';
import Loading from '../../Loading';

interface IButtonProps extends React.ComponentProps<typeof ButtonComponent> {
  children: ReactNode;
  loading?: boolean;
}

export default function Button(props: IButtonProps) {
  const { disabled, loading, ...rest } = props;

  return (
    <ButtonComponent
      {...rest}
      disabled={disabled || loading}
      variant="contained"
    >
      {props.children}

      {props.loading && <Loading />}
    </ButtonComponent>
  );
}
