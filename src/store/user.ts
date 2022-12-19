import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', {
  state() {
    return {
      statu: '在线',
      total: 527,
      request: 'get'
    }
  },
  getters: {
    getTotal: (user) => {
      return user.total * 10
    },
    getStatuTotal(): string {
      return this.statu + this.getTotal;
    },
    getNewTotal: (user) => {
      return (num: number) => user.total * num
    }
  },
  actions: {
    saveStatu(name: string) {
      this.statu = name
    }
  }
})