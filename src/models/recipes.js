const recipes = {
  state: {
    recipes: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setRecipes: (state, payload) => ({...state, recipes: payload}),
  },
  effects: dispatch => ({
    fetchRecipes: async (payload, getState) => {
      console.log('hi');
    },
  }),
};

export default recipes;
