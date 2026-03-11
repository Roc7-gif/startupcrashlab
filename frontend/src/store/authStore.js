// store/authStore.js
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useAuthStore = create(
  persist(
    (set) => ({
      access: null,
      refresh: null,
      email: null,

      login: (tokens) =>
      { console.log(tokens)
          return set({
          access: tokens.access,
          refresh: tokens.refresh,
          email : tokens.email 
        })},

      logout: () =>
        set({
          access: null,
          refresh: null,
          email: null,
        }),

    setAccess: (newAccess) =>
        set({
            access: newAccess
                  
               }),
      
     setRefresh: (Refresh) =>
         set({
             refresh: Refresh
            
         }),
    }),
    
    { name: "auth-storage" }
  )
)