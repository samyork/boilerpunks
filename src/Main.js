import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import MetaMask from './MetaMask'
import {Web3ReactProvider} from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider)
}
export const web3 = getLibrary();
console.log(web3);

function Main({Component, pageProps}) {
  const [acct, setAcct] = useState('');
  useEffect(() =>{

  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="App">
    <MetaMask/>
    </div>
    </Web3ReactProvider>
  );
}
export default Main;
