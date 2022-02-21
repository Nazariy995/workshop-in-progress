import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { ethers } from "ethers";
import backgroundVideo from "./assets/background.mp4"
import nftVideo from "./assets/nftvideo.mp4";
import { useMoralis } from "react-moralis";
import abi from "./contracts/contract.json";
const CONTRACT_ADDRESS = "0x26ae03b50ab642c986b63edcce758b7f3e370491";

function App() {
  const { authenticate, isAuthenticated, user, enableWeb3 } = useMoralis();


  const mint = () => {

  }


  useEffect( async ()=>{
    if(isAuthenticated){
      // connect the contract
      const web3Provider = await enableWeb3();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, web3Provider);
      // get the total supply from the contract
      console.log(contract);
    }

  }, [isAuthenticated])


  return (
    <div className="App">
        <video className='background-video' src={backgroundVideo} width="600" height="300" playsInline={true} muted={true} autoPlay={true} loop={true}/>
        <div className='main'>
            <div className='main-left'>
              <video src={nftVideo} height="400" playsInline={true} muted={true} autoPlay={true} loop={true}/>
            </div>
            <div className='main-right'>
              <h2>Adidos: INTO THE METAVERSE</h2>
              <div className='description'>2 minted / 200</div>
              <div className='actions'>
                {isAuthenticated ?
                  <button onClick={authenticate} className='filled'>Mint</button>
                  :
                  <button onClick={authenticate} className='filled'>Connect Wallet</button>
                }
                <button className='transparent'>Start Over</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
