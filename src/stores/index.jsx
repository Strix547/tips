import { createContext, useContext } from 'react'

import { AuthStore } from './auth'
import { UserStore } from './user'

let store

export class RootStore {
  auth = new AuthStore()
  user = new UserStore()
}

function initializeStore(initialData = null) {
  const localStore = store ?? new RootStore()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    localStore.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return localStore
  // Create the store once in the client
  if (!store) store = localStore

  return localStore
}

export const StoreContext = createContext()

export function useStore() {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function StoreProvider({ children, initialState: initialData }) {
  const store = initializeStore(initialData)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
