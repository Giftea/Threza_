import { StorageProvider } from '@arcana/storage'
import { AuthProvider, AppMode } from '@arcana/auth'

let auth
let storageProvider

export async function getWalletInstance () {
  if (!auth) {
    auth = new AuthProvider('880b0CBE826Df963BaeB3816d0fE59e5c198176F')
    await auth.init({ appMode: AppMode.Full, position: 'right' })
  }

  return auth.provider
}

export default async function getStorageProvider (provider) {
  // const provider = await getWalletInstance()

  if (!storageProvider) {
    storageProvider = new StorageProvider({
      appId: '880b0CBE826Df963BaeB3816d0fE59e5c198176F',
      // gateway: 'https://gateway-dev.arcana.network/api/v1/',
      provider
    })
  }

  return storageProvider
}
