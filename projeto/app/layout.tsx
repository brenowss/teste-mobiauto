import { Providers } from '@/lib/providers';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import { Roboto } from 'next/font/google';
import './styles/globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Mobiauto - Teste Técnico</title>
      </head>
      <body style={roboto.style}>
        <Providers>
          <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
