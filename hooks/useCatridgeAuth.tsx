import React, { useCallback } from 'react'
import { useAccount, useConnect, useDisconnect } from '@starknet-react/core'
import { useEffect, useState } from 'react'
import ControllerConnector from '@cartridge/connector/controller'

export function useCatridgeAuth() {
 const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, isConnected, status } = useAccount()
  const controller = connectors[0] as ControllerConnector
  const [username, setUsername] = useState<string>()
 

  const login = useCallback(async (options?: Record<string, any>) => {
    if (!controller) throw new Error("Cartridge connector not registered");
    await connect({ connector: controller, ...(options ? { options } : {}) });
  }, [connect, controller]);


  return { address, connect, disconnect, controller, username, setUsername, isConnected, status, login }

}
