import { useEffect } from 'react';
import { Container } from './styles';
import { Toast } from '@/utils/toast';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface ToastMessageProps {
  message: Toast;
  onRemoveMessage: () => void;
}

export default function ToastMessage({
  message,
  onRemoveMessage,
}: ToastMessageProps) {
  const { text, type } = message;

  function handleRemoveToast() {
    onRemoveMessage();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleRemoveToast();
    }, message.time || 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, handleRemoveToast]);

  return (
    <Container
      type={type}
      onClick={() => handleRemoveToast()}
      tabIndex={0}
      role="button"
    >
      {type === 'error' && <ErrorIcon />}
      {type === 'success' && <CheckCircleIcon />}
      <strong>{text}</strong>
    </Container>
  );
}
