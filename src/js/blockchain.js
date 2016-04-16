import Web3 from 'web3';

if(typeof web3 !== 'undefined')
  var web3 = new Web3(web3.currentProvider);
else
  // set the provider you want from Web3.providers
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export function getTransaction(hash){
  return web3.getTransaction(hash);
}

export default function init (){
  console.log(web3.eth.coinbase);
}