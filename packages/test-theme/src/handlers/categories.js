const categories = {
    name: 'categories',

    priority: 10,

    pattern: '/blog',

    func: async ({link, libraries, state}) => {
        console.log('Being handled')
        const response = await libraries.source.api.get({
            endpoint: '/jasonsegnini/v1/categories/'
        })

        const categories = await response.json()

        Object.assign(state.source.data[link], {
           categories: categories
        })
    }
}

export default categories