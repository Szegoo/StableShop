import Web3 from 'web3';
import ContractABI from '../ABI/StableTokenABI';
import BigNumber from 'big-number';
import { useState } from 'react';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
const owner = '0x87BC5b7Ea1A2957ECcE8ae1858FC590744369902';

async function buy(addOrder, product, address, productPrice) {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const StableToken = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    const gas = await StableToken.methods.transfer(owner, BigNumber(productPrice * Math.pow(10, 18))).estimateGas();
    const result = await StableToken.methods.transfer(owner, BigNumber(productPrice * Math.pow(10, 18))).send({ gas });
    if (result.status) {
        console.log("uspesna tranzakcija");
        addOrder({ variables: { order: { address: address, productId: product } } })
    }
}
export default (props) => {
    const [address, setAddress] = useState('')
    return (
        <div className="modal-background">
            <div className="order-modal">
                <p>Enter the data for shipping</p>
                <input onChange={(e) => { setAddress(e.target.value) }} placeholder="address" />
                <button onClick={() => { buy(props.addOrder, props.product, address, props.productPrice) }}>Confirm</button>
            </div>
        </div>
    )
}