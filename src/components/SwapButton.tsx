import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";

import "@jup-ag/terminal/css";

export const SwapButton: FC = () => {
    const { publicKey } = useWallet();
    const walletProps = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
            return;
        }
        //console.log(process.env.TOKEN_MINT);
        //console.log(process.env);
        if (typeof window !== "undefined") {
            import("@jup-ag/terminal").then((mod) => {
              const init = mod.init;
              init({
                endpoint: process.env.REACT_APP_SOLANA_RPC_HOST,
                strictTokenList: false,
                formProps: {
                  fixedInputMint: true,
                  fixedOutputMint: true,
                  initialAmount: "500000000",
                  initialSlippageBps: 100,
                  initialInputMint: "So11111111111111111111111111111111111111112",
                  initialOutputMint: "CGT8Y229MFcRLMQxCmh5tNEX6ZZCcv2bXLfFrL7eG2WT"
                },
                useUserSlippage: false,
              });
            });
        }
        
    }, [publicKey]);

    //if(window.location.host.split('.')[0] == "dev"){
        return (

            <div className="flex flex-row justify-center">
                    <div className="relative group items-center">
                        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                        rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                            <button
                                className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                                onClick={onClick}
                                disabled={!publicKey}
                                >
                                    <span>Swap RUdown Token</span>
                    
                            </button>
                    </div>
            </div>
            
            
        );
    //}else{
    //    return;
    //}
    
};

