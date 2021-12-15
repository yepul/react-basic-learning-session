import type { AppProps } from "next/app";
import "../styles/globals.css";
import { StoreProvider } from "easy-peasy";
import { store } from "@/src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
