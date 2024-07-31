import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-11 w-4">
      <h1>gu</h1>
        <ConnectButton />
    </div>
  );
};

export default Home;
