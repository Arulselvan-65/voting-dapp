import type { NextPage } from 'next';
import Image from 'next/image';
import votingPic from '../assets/voting-pic.png';
import Button from '../components/Button';


const Home: NextPage = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20'>
        <h1 className='font-montserrat text-4xl md:text-6xl tracking-wide font-bold text-gray-800 mb-0'>Welcome to 
          <span className="bg-gradient-to-tr from-gray-700 to-orange-600 text-transparent bg-clip-text"> VotAms</span></h1>
        <p className='text-lg text-gray-600 text-center mt-2' style={{opacity: 1}}>Blockchain-Powered Votes: Secure, Transparent, and Immutable!</p>
        
        <div className="my-6">
          <Button onclick={null} text={"Get Started"}/>
        </div>
      
          <Image src={votingPic} alt="voting pic" className="w-[90%] max-w-[60vh] object-cover"/>
      </div>
    </div>
  );
};

export default Home;
