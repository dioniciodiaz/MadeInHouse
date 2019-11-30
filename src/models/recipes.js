export const recipes = {
  state: {
    recipes: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setRecipes(state, payload) => {...state, recipes: payload},
  },
  effects: dispatch => ({
    async fetchRecipes(payload, getState) => {
      console.log("hi")
    }
  })
}