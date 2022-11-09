import { StorageProvider } from '@arcana/storage'
import { AuthProvider, AppMode } from '@arcana/auth'
import { ethers } from 'ethers';

let auth
let storageProvider

export async function getWalletInstance () {
  if (!auth) {
    auth = new AuthProvider(process.env.APP_ADDRESS)
    await auth.init({ appMode: AppMode.Full, position: 'right' })
  }
  return auth.provider
}

export default async function getStorageProvider (provider) {
  if (!storageProvider) {
    storageProvider = new StorageProvider({
      appId: process.env.APP_ADDRESS,
      // gateway: 'https://gateway-dev.arcana.network/api/v1/',
      provider
    })
  }

  return storageProvider
}