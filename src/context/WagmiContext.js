import { createContext } from 'react'
import { WagmiConfig, configureChains, createConfig, mainnet, useAccount, useConnect } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const WagmiContext = createContext();

export const WagmiProvider = ({ children }) => {
    
    const { chains, publicClient, webSocketPublicClient } = configureChains(
        [mainnet],
        [publicProvider()],
    )

    const config = createConfig({
        autoConnect: true,
        publicClient,
        webSocketPublicClient
    })

    return (
        <WagmiContext.Provider value={{
            data: null
        }} >
            <WagmiConfig config={config}>
                {children}
            </WagmiConfig>
        </WagmiContext.Provider>
    )
}