import create, { State } from 'zustand'
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js'

interface UserTokenBalanceStore extends State {
  balance: number;
  getUserTokenBalance: (publicKey: PublicKey, connection: Connection) => void
}

const useUserTokenBalanceStore = create<UserTokenBalanceStore>((set, _get) => ({
  balance: 0,
  getUserTokenBalance: async (publicKey, connection) => {
    let balance = 0;
    try {
      
      let walletTokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
        mint: new PublicKey('CGT8Y229MFcRLMQxCmh5tNEX6ZZCcv2bXLfFrL7eG2WT') // RUdown Token Mint address
      })
      const walletTokenAccount = walletTokenAccounts.value[0];
      const amount = walletTokenAccount.account.data.parsed.info.tokenAmount.uiAmount;
      balance = amount;

    } catch (e) {
      console.log(`error getting balance: `, e);
    }
    set((s) => {
      s.balance = balance;
      console.log(`balance updated, `, balance);
    })
  },
}));

export default useUserTokenBalanceStore;