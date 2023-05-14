import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Voting from "./artifacts/contracts/Voting.sol/Voting.json";
import "./App.css";
import Login from "./components/Login";

//Contract Address
const votingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
        alert(account);
        setIsConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Metamask is not connected!");
    }
  };

  return (
    <div className="App">
      <Login connectWallet={connectWallet} />
      <p>hi</p>
    </div>
  );
}

export default App;
