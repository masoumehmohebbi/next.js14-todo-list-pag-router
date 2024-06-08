import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { EditingProvider } from 'src/context/IsEdittingTodoContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <EditingProvider>
        <Component {...pageProps} />
      </EditingProvider>
    </ThemeProvider>
  );
}
