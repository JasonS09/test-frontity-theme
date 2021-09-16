import Root from "./components"
import categories from "./handlers/categories"

const myFirstTheme = {
  name: "test-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({libraries}) =>
        libraries.source.handlers.push(categories),

      beforeSSR: async ({state, actions}) =>
        await actions.source.fetch(state.source.postsPage)
    },
  },
}

export default myFirstTheme
