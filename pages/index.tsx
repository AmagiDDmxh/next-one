import ERC20 from '@components/ERC20'
import Head from 'next/head'
import { useAccount, useConnect } from 'wagmi'

export const Home = (): JSX.Element => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const [{ data: connectData, error: connectError }, connect] = useConnect()

  return (
    <div>
      <Head>
        <title>Create Next App with Amagi:DDmxh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {accountData ? (
          <div className="text-3xl text-black">
            {/* TODO */}
            <img src={accountData.ens?.avatar ?? ''} alt="ENS Avatar" />
            <div>
              {accountData.ens?.name
                ? `${accountData.ens?.name} (${accountData.address})`
                : accountData.address}
            </div>
            {/* TODO */}
            <div>Connected to {accountData?.connector?.name}</div>
            <button onClick={disconnect}>Disconnect</button>
          </div>
        ) : (
          <div className="flex gap-2 p-4">
            {/* // TODO */}
            {connectData.connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect(connector)}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
              </button>
            ))}
            {connectError && (
              <div>{connectError?.message ?? 'Failed to connect'}</div>
            )}
          </div>
        )}
      </header>

      <main className="border-2 mt-2">
        <ERC20 />
      </main>
    </div>
  )
}

export default Home
