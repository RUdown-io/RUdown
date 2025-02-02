// Next, React
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

export const HomeView: FC = ({ }) => {
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
        <div className='mt-6'>
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4 big-rainbow-letters-1">
            Welcome to RUdown!
          </h1>
          <div className="items-center md:items-start social-center">
              <a href="https://x.com/RUdown_io" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 h-full mx-auto"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@rudownmeme" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-5 h-full mx-auto"
                >
                  {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    fill="currentColor"
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  />
                </svg>
              </a>
              <a href="https://instagram.com/rudownmeme" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 h-full mx-auto"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
              </a>

              



              <a href="https://github.com/RUdown-io"  type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 justify-center">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 h-full mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a href="https://jup.ag/swap/So11111111111111111111111111111111111111112-CGT8Y229MFcRLMQxCmh5tNEX6ZZCcv2bXLfFrL7eG2WT?inAmount=0.1" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                  <img src="/jupiter.png" width={50} height={50} />
              </a>
              <a href="https://dexscreener.com/solana/CGT8Y229MFcRLMQxCmh5tNEX6ZZCcv2bXLfFrL7eG2WT" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                  <img src="/dexscreener.png" width={50} height={50} />
              </a>

              <a href="https://app.meteora.ag/pools/Bg37ZJcGmjChkGqKC2rgyjoB1ePq5mRF5PCQLc4XPKhx"  type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                 <img src="/meteora.png" width={50} height={50} />
              </a>
            </div>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>Unleash the full power of blockchain with RUdown.</p>
          <p className='text-slate-500 text-2x1 leading-relaxed'>This is the RUFS &quot;RUdown Funding System&quot;</p>
        </h4>
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

        <div className='mt-6 text-center'>
          <h2 className="rainbow-letters-6">About $RUdown Token</h2>
      $RUdown introduces $RUdown Token, a digital currency with a heart. By investing in $RUdown Token, you support not just innovative blockchain technology but contribute to a vital cause. Our cryptocurrency is designed to be user-friendly, secure, and transparent, with a vision to create a more inclusive financial ecosystem. Every transaction with $RUdown Tokenis a step towards raising awareness and support for individuals with Down syndrome.

      <h2 className="rainbow-letters-3">Our Community</h2>
      <p>
      Our community is the heart of $RUdown&#39;s mission. Here, people from around the world who share a passion for cryptocurrencies and a commitment to increasing awareness of Down syndrome come together. We believe in the power of community and collaboration:
      </p>
      <p>
      Education and Awareness: We organize regular webinars, workshops, and gatherings to spread knowledge about Down syndrome. By understanding more about the condition, together we can create a more inclusive world. Support and Solidarity: We provide a platform where individuals and families affected by Down syndrome can meet, share experiences, and support each other. The community is a place of strength and inspiration. Inclusion through Innovation: Through our blockchain technology and $RUdown Token, we aim to show how technology can be used to break down barriers and promote inclusion. Every investment in our currency is an investment in this vision.
                      </p>

      <h2 className="rainbow-letters-4">Activities and Events</h2>
      <p>
        Rock Your Socks: Every March 21, on World Down Syndrome Day, we participate in &quot;Rock Your Socks&quot; to show solidarity and raise awareness. By wearing mismatched socks, we demonstrate that we value diversity.
      </p>
      <h2 className="rainbow-letters">Profit Allocation</h2>
      <p>
        A portion of the profits from $RUdown Tokengoes to initiatives supporting people with Down syndrome, including education, research, and community projects.
      </p>
      <h2 className="rainbow-letters-2">Virtual and Physical Meetings</h2>    
      <p>
        We host both online and offline events where you can meet other members, learn more about cryptocurrencies, and how they can support social issues.
      </p>
      <h2 className="rainbow-letters-3">Funding for Daily Activities and Homes</h2>
      <p>
        At $RUdown, we also offer funding opportunities for daily activities or homes where clients with Down syndrome live. These grants can be used for:<br />
        <ul>
          <li><b>Travel:</b> Helping to fund trips that can provide new experiences, learning opportunities, and community building for individuals with Down syndrome.</li>
          <li><b>Development Tools and Equipment:</b> Supporting the purchase of tools, equipment, or other resources that can aid in the personal development and independence of those with Down syndrome.</li>
        </ul>
      </p>
      <h2 className="rainbow-letters-4">Be Part of the Change</h2>
      <p>
        <p>By investing in $RUdown Tokenand participating in $RUdown?&#39;s community, you can be part of a unique fusion of technology and humanity.</p>

        <p>Invest in $RUdown Token: Learn how you can buy and use our cryptocurrency to support our work.</p>

        <p><b>Get Involved:</b> Engage in our events, follow us on social media, and spread the word about our mission.</p>

        <p>Together, we can create a world where people with Down syndrome are seen as equals and where their potential can be fully realized. Join us in our endeavor to change lives through awareness, inclusion, and innovation.</p>

<p>Contact us for more information or if you wish to contribute in other ways to our community and initiatives.</p>

<p>By combining the power of cryptocurrencies with a strong commitment to improving the lives of people with Down syndrome, we at $RUdown create a community that makes a difference. Welcome to $RUdown? - $RUdown Token and Community for Down Syndrome Awareness!</p>
      </p>
          
        </div>
      </div>
    </div>
  );
};
