import * as contentful from 'contentful'

export default (ctx, inject) => {
  // read from injected options
  const options = <%= JSON.stringify(options) %>

  const configuration = Object
    .keys(options.environments)
    .reduce((environments, env) => Object.assign({}, environments, {
      [env]: contentful.createClient(options.environments[env])
    }), {})
  
  inject('contentful', configuration)
}
