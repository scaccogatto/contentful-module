import * as contentful from 'contentful'

export default (options) => {
  const environments = Object
    .keys(options.environments)
    .reduce((environments, env) => Object.assign({}, environments, {
      [env]: contentful.createClient(options.environments[env])
    }), {})

    return {
      environments,
      client: environments[options.default]
    }
}
