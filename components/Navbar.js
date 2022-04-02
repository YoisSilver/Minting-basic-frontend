import React from 'react'

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return (
        <div className='Navbar'>
            <h3>Title</h3>

            {isConnected ? (<p>connected</p>) : (<button onClick={connectAccount}>Connect</button>)}
        </div>
    )
}

export default Navbar;