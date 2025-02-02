import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';
import Image from 'next/image';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden-mobile sm:inline w-22 h-22 md:p-2 ml-10">
            <Link href="/" passHref className="text-secondary hover:text-white">
              <Image
                  src="/solanaLogo.png"
                  alt="ru down logo"
                  width={170}
                  height={47}
              />
            </Link>
          </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden-mobile md:inline-flex align-items-center justify-items gap-6">
          <NavElement
            label="Start"
            href="/"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="Projects"
            href="/current"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="Buy"
            href="/swap"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="Roadmap"
            href="/roadmap"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="News"
            href="/memes"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
        </div>
          <label
              htmlFor="my-drawer"
              className="btn-gh items-center justify-between md:hidden mr-6"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div className={`h-0.5 w-8 bg-purple-600`} />
              <div className={`h-0.5 w-8 bg-purple-600`} />
              <div className={`h-0.5 w-8 bg-purple-600`} />
            </div>
        </label>
      
        </div>
      </div>
    </div>
  );
};
