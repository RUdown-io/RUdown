// TODO: SignMessage
import { Keypair, SystemProgram, Transaction, TransactionMessage, TransactionSignature, VersionedTransaction, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { verify } from '@noble/ed25519';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { FC, useCallback, useState } from 'react';
import { notify } from "../utils/notifications";


interface FundProps {
    address: string
}

export const FundProject: FC<FundProps> = ({
    address = ""
}) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const [input, setInput] = useState(null)
    const [buttonText, setButtonText] = useState("Fund Project")

    const onInputChange = useCallback(async (e) => {
        e.target.value = e.target.value.replace(/,/g, '.');
        setInput(e.target.value);
        if(e.target.value > 0){
            setButtonText("Fund Project ("+e.target.value+" SOL)")
        }else{
            setButtonText("Fund Project")
        }
    }, [input, buttonText]);

    const onClick = useCallback(async () => {
        let amount = input;
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }
        if (amount <= 0) {
            notify({ type: 'error', message: `SOL has to be a postive number` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        let signature: TransactionSignature = '';
        try {

            // Create instructions to send, in this case a simple transfer
            const instructions = [
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(address),
                    lamports: LAMPORTS_PER_SOL * amount,
                }),
            ];

            // Get the lates block hash to use on our transaction and confirmation
            let latestBlockhash = await connection.getLatestBlockhash()

            // Create a new TransactionMessage with version and compile it to legacy
            const messageLegacy = new TransactionMessage({
                payerKey: publicKey,
                recentBlockhash: latestBlockhash.blockhash,
                instructions,
            }).compileToLegacyMessage();

            // Create a new VersionedTransacction which supports legacy and v0
            const transation = new VersionedTransaction(messageLegacy)

            // Send transaction and await for signature
            signature = await sendTransaction(transation, connection);

            // Send transaction and await for signature
            await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

            console.log(signature);
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });
        } catch (error: any) {
            //notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, notify, connection, sendTransaction, input]);

    return (
        <div className="flex flex-row justify-center button-holder">
            <div className="relative group items-center">
                <input
                    type="text" 
                    placeholder="0.00 SOL" 
                    className="text-input group w-60 m-2 hover:from-white hover:to-purple-300 text-black" 
                    disabled={!publicKey} 
                    onChange={onInputChange}
                />
                <div className="m-1 absolute rounded-lg"></div>
                <button
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-400 text-black"
                    onClick={onClick} disabled={!publicKey}
                >
                    <div className="hidden group-disabled:block">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden" > 
                        {buttonText}
                    </span>
                </button>
            </div>
        </div>
    );
};
