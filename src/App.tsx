import {ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletDisconnectButton, WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';

function App() {
	const wallet = useWallet();
	console.log(wallet);
	return (
		<>
			<ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/q6yoSXU6XQJtWr_2qBYRlRhW-urEqy_f'}>
				<WalletProvider wallets={[]}>
					<WalletModalProvider>
						<main className='max-w-7xl m-auto h-lvh'>
							<div className='p-8 text-center'>
								<h1 className='text-6xl text-violet-900 font-bold'>FreeSOL</h1>
								<h2 className='text-2xl mt-4 font-medium text-slate-800 '>A simple Sol Airdropping DAPP</h2>

								<p className='text-2xl text-red-600 font-bold mt-8 '>
									This tool does *NOT* give real $SOL or Solana tokens.
								</p>
							</div>
							<div className='flex mt-4 justify-center gap-4'>
								<WalletMultiButton />
								<WalletDisconnectButton />
							</div>

							<Airdrop />
						</main>
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</>
	);
}

export default App;
