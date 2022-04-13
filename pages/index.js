import { useState, useEffect } from "react";
import PrimaryButton from "../components/primary-button";
require('dotenv').config();

export default function Home() {
  const [ethereum, setEthereum] = useState(undefined);
  const[connectedAccount, setConnectedAccount] = useState(undefined);
  const contractAddress = process.env.CONTRACT_ADDRESS;

  const handleAccounts = (accounts) => {
    if (accounts.length >0){
      const account = accounts[0];
      console.log('An authorized account found! ', account);
      setConnectedAccount(account);
    }else{
      console.log('No authorized account found!');
    }
  };

  const getConnectedAccount = async() => {
    if(window.ethereum){
      setEthereum(window.ethereum);
    }
    if(ethereum){
      const accounts = await ethereum.request({method: 'eth_accounts'});
      handleAccounts(accounts);
    }
  };

  useEffect(() => getConnectedAccount(), []);

  const connectAccount = async() => {
    if(!ethereum){
      alert('Metamask is required to connect an account');
      return;
    }
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    handleAccounts(accounts);
  };

  if(!ethereum){
    return <p>Please install Metamask to connect to this site</p>

  }

  if(!connectedAccount){
    return <PrimaryButton onClick={connectAccount}>Connect Metamask Wallet</PrimaryButton>
  }

  return <p>Connected Account: {connectedAccount}</p>
}
