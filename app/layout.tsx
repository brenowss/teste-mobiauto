import { Providers } from '@/lib/providers';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import { Roboto } from 'next/font/google';
import './styles/globals.css';
import ToastContainer from './components/Toast/ToastContainer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="pt-br">
      <head>
        <title>Tabela Fipe</title>
      </head>
      <body style={roboto.style}>
        <Providers>
          <StyledComponentsRegistry>
            <ToastContainer />
            {props.children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
