export const useLogged = defineStore('logged', {
  state: () => ({
    in: false,
  }),

  actions: {
    changeMe() {
      this.in = true
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLogged, import.meta.hot))
}