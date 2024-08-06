import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from '../Button';

const Navbar = () => {
  return (
    <div>

      <div className='flex justify-between px-6 py-2 shadow-lg '>
        <div>
          <h1 className='text-[33px] sm:text-[37px] font-bold bg-gradient-to-tr from-gray-700 to-orange-600 text-transparent bg-clip-text tracking-wider '>VotAms</h1>
        </div>

        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openConnectModal,
            openChainModal,
            mounted,
          }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button onclick={openConnectModal} text={"Connect Wallet"}/>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <button
                        onClick={openAccountModal}
                        type="button"
                        style={{ textAlign: 'left' }}
                      >
                        {account.displayBalance && (
                          <div className='flex rounded-lg bg-gray-800 w-40 px-1 h-12'>
                            <div className='flex w-12 items-center justify-center'>
                              <img src={chain?.iconUrl} style={{objectFit: "cover", height: "70%"}}/>
                            </div>
                            <div className='border-l border-l-gray-500 text-gray-300 px-3 text-center py-1 text-[14px]'>
                              {account.displayBalance}<br/>
                              {account.displayName}
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>

      </div>
    </div>
  );
};

export default Navbar;
