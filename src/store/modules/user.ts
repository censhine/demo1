// store/modules/user.ts
import { defineStore } from 'pinia';

interface UserState {
  menuKeys: string[];
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    menuKeys: [],
  }),
  actions: {
    setMenuKeys(keys: string[]) {
      console.log(keys)
      this.menuKeys = keys;
    },
  },
});
