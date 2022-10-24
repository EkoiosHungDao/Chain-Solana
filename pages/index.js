import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <div className="container mx-auto grid place-content-center place-content-stretch h-36">
      <WalletMultiButton />
    </div>
  );
}
