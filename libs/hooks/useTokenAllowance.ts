import { useState, useEffect } from 'react'
import { useProvider, useAccount, erc20ABI } from 'wagmi'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'

/**
 * 1. cache
 * 2. listen block number
 */
export const useTokenAllowance = (tokenAddress?: string, spender?: string) => {
  const provider = useProvider()

  const [{ data: accountData }] = useAccount()
  const address = accountData?.address

  const [allowance, setAllowance] = useState<{
    value: BigNumber
    formatted: string
  }>()

  const [isLoading, setIsLoading] = useState(false)

  const shouldFetch = !!address && !!tokenAddress && !!spender

  useEffect(() => {
    if (!shouldFetch) {
      return
    }

    const tokenContract = new Contract(tokenAddress, erc20ABI, provider)

    if (tokenContract) {
      setIsLoading(true)

      tokenContract
        .allowance(address, spender)
        .then((allowance: BigNumber) => {
          const formatted = formatEther(allowance)
          setAllowance({
            value: allowance,
            formatted,
          })
        })
        .catch((error: any) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [address, provider, shouldFetch, spender, tokenAddress])

  return { allowance, isLoading }
}
