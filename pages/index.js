import Body from '../components/Body'
import Navbar from '../components/Navbar'
import { useState } from 'react'


export default function Home() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className='testing'>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Body accounts={accounts} setAccounts={setAccounts} />
    </div>
  )
}
