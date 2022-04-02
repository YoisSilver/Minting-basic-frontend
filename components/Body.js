import { useState, React } from 'react';
import { ethers, BigNumber } from 'ethers';
import AvoKitties from '../contract/AvoKitties.json';
const AvoKittiesAddress = '0x3f4ee78DDF07673de6015AE7a767002EBFbcd68F';

const Body = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                AvoKittiesAddress, AvoKitties.abi, signer

            );
            const response = await contract.mint(BigNumber.from(mintAmount), { value: ethers.utils.parseEther("0.00001") * (mintAmount) })
        }
    };

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1)
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1)
    };

    return (
        <div className="Content">
            <h3>Mint your NFTs now!</h3>

            {isConnected ? (
                <div>
                    <div className='buttons'>
                        <button onClick={handleDecrement}> - </button>
                        <input type="number" readOnly value={mintAmount} />
                        <button onClick={handleIncrement}> + </button>
                    </div>
                    <button onClick={handleMint}>Mint</button>
                </div>
            ) : (
                <p>please connect</p>)}
        </div>
    )
}

export default Body