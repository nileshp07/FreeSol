import {useConnection, useWallet} from '@solana/wallet-adapter-react';
import {useState} from 'react';

export default function Airdrop() {
	const [amount, setAmount] = useState(0);
	const wallet = useWallet();
	const {connection} = useConnection();

	async function sendAirdrop() {
		await connection.requestAirdrop(wallet.publicKey!, amount * 1000000000);
		alert('Airdropped sol.');
	}

	return (
		<div className='w-[60%] flex flex-col items-center p-8 mt-8 gap-4 border-violet-600 border m-auto bg-violet-600'>
			{/* <div className='font-2xl text-center'>
				{wallet?.publicKey && (
					<h1 className=' text-white leading-8'>
						<span className=' text-2xl  font-semibold'>Your public key / wallet address:</span>{' '}
						{wallet.publicKey?.toString()}
					</h1>
				)}
			</div> */}
			<p className=' text-xl mb-4 text-white font-semibold'>Enter the amount of sol to airdrop</p>
			<div className='flex gap-4'>
				<input
					type='number'
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
					placeholder='Enter amount of sol to airdrop'
					className='border border-slate-500 px-3 py-1 rounded-lg w-20'
				/>
				<button
					onClick={sendAirdrop}
					className='px-4 py-2 bg-red-500 text-white tracking-wider rounded-md hover:bg-red-700 font-bold'
				>
					Airdrop
				</button>
			</div>
		</div>
	);
}
