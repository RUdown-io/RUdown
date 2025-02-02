import { FC, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { SwapButton } from '../../components/SwapButton';
import { ProjectImage } from '../../components/ProjectImage';
// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import useUserTokenBalanceStore from '../../stores/useUserTokenBalanceStore';

export const SwapView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const tokenBalance = useUserTokenBalanceStore((s) => s.balance)

  const { getUserSOLBalance } = useUserSOLBalanceStore()
  const { getUserTokenBalance } = useUserTokenBalanceStore()
  const { setVisible } = useWalletModal();

  useEffect(() => {
    if (wallet.publicKey) {
      //console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
      getUserTokenBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance, getUserTokenBalance])
  
  const onClickConnect = useCallback(async () => {
        setVisible(true);
  }, [setVisible]);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Swap RUdown Token
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <div className="flex flex-col mt-2">
          
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet.publicKey &&
          <div className="flex flex-row justify-center rainbow-letters-2">
            Your current holdings
          </div>
          }
          <div className="flex flex-row justify-center small-rainbow-letters-1">
            CA: CGT8Y229MFcRLMQxCmh5tNEX6ZZCcv2bXLfFrL7eG2WT
          </div>
          {wallet.publicKey &&
          <div className="flex flex-row justify-center">
            <div>
              <img className="coin-logo" src="/solana_logo.png" width={25} height={25} /> {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
          </div>
          }

          {wallet.publicKey &&
          <div className="flex flex-row justify-center">
            <div>
              <img className="coin-logo" src="/coin_logo.png" width={25} height={25} /> {(tokenBalance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                RUdown
              </div>
          </div>
          }
          </h4>
          {wallet.publicKey &&
            <SwapButton />
          }
          {!wallet.publicKey &&
            <div className="flex flex-row justify-center">
                    <div className="relative group items-center">
                        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                        rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                            <button
                                className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                                onClick={onClickConnect}
                                >
                                    <span>Connect your wallet!</span>
                    
                            </button>
                    </div>
            </div>
          }
        </div>
        </div>
      </div>
    </div>
  );
};
