import React, { useState } from 'react'
import Allowance from './Allowance'

// Panda addr 0x3cBb7f5d7499Af626026E96a2f05df806F2200DC

const ERC20 = () => {
  const [tokenAddress, setTokenAddress] = useState<string>(
    '0x3cBb7f5d7499Af626026E96a2f05df806F2200DC'
  )
  const [submittedTokenAddress, setSubmittedTokenAddress] = useState<string>()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target
    setTokenAddress(value)
  }

  const handleConfirm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setSubmittedTokenAddress(tokenAddress)
  }

  return (
    <div className="p-4">
      <form action="/action_page.php" className="inline-flex">
        <input value={tokenAddress} onChange={handleChange} />
        <button type="submit" onClick={handleConfirm}>
          Confirm
        </button>
      </form>

      <Allowance
        tokenAddress={submittedTokenAddress}
        spender={'0xC36442b4a4522E871399CD717aBDD847Ab11FE88'}
      />
    </div>
  )
}

export default ERC20
