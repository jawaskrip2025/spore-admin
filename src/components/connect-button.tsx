"use client"
import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
import { Button } from "@/components/ui/button"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Wallet } from 'lucide-react'
import { cutString } from '@/lib/string'

type TConnectButton = {
  label?: string
}
export default function ConnectButton(props: TConnectButton) {
  const { isReady } = useAppKitWallet()
  const { isConnected, address } = useAppKitAccount()
  const { open } = useAppKit()
  return (
    <div>
      {
        isReady ? (
          <>
            {
              isConnected && address ? (
                <Button  onClick={() => open()}>
                  {cutString(address, 5)}
                </Button>
              ) : (
                <Button  onClick={() => open()}>
                  <Wallet />
                  {props.label || "Connect"}
                </Button>
              )
            }
          </>
        ) : (
          <Button disabled>
            <Wallet />
            Loading...
          </Button>
        )
      }
    </div>
  )
}