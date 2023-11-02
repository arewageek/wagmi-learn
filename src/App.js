import { useAccount, useConnect } from 'wagmi';
import './App.css';
import { WagmiProvider } from './context/WagmiContext';

function App() {

  // hooks defined
  const { address, isConnected } = useAccount()
  const { connectors } = useConnect()

  // const doConnect = () => {
  //   if(!isConnected){
  //     connectors()
  //   }
  // }
  
  return (
    <WagmiProvider>
      <div className="App min-h-screen w-screen bg-slate-700 text-gray-100 md:px-10 md:py-12 px-5 py-10 flex justify-center items-center">

        
        
        
      </div>
    </WagmiProvider>
  );
}

export default App;
