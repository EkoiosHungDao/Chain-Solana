import { WalletConnectionProvider } from "../services/WalletConnectProvider";

import "../styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <WalletConnectionProvider>
          <Component {...pageProps} />
        </WalletConnectionProvider>
      </main>
    </>
  );
}

export default MyApp;
