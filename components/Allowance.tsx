import { useTokenAllowance } from '@libs/hooks/useTokenAllowance'
import React from 'react'

type AllowanceProps = {
  tokenAddress?: string
  spender?: string
}

const Allowance = ({ tokenAddress, spender }: AllowanceProps) => {
  const { allowance, isLoading } = useTokenAllowance(tokenAddress, spender)

  if (isLoading) {
    return <div>loading allowance...</div>
  }

  return (
    <div>
      Your token allowance to {spender} is {allowance?.formatted}
    </div>
  )
}

export default Allowance
