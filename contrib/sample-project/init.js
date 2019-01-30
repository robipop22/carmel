const REQUIREMENTS = [
  `at least a chunk with a route that contains a title, a cover title and a cover subtitle`
]

const validRoute = (route) => {
  return route && route.title && route.cover && route.cover.title && route.cover.subtitle
}

const findChunksWithValidRoutes = (carmel) => {
  return carmel.product.chunks.map(chunk => {
    if (!chunk.config.routes) {
      return
    }

    const validRoutes = Object.keys(chunk.config.routes).map(route => validRoute(chunk.config.routes[route]) ? route : false)
    return (validRoutes && validRoutes.length > 0) ? Object.assign({}, chunk, { validRoutes }) : false
  })
}

const init = (carmel) => new Promise((resolve, reject) => {
  // Let's look up chunks with at least a route that contains a title, a cover title and a cover subtitle
  const chunks = findChunksWithValidRoutes(carmel)

  if (!chunks || chunks.length === 0) {
    // This challenge needs a route that contains a title, a cover title and a cover subtitle
    reject(new Error(`This challenge requires ${REQUIREMENTS[0]}`))
    return
  }

  // Let's take the first of these
  const chunk = chunks[0]

  // And let's also take its first valid route
  const route = chunk.validRoutes[0]

  resolve({ chunk, route })
})

module.exports = init
