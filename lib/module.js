import path from 'path'

export default function Contentful (moduleOptions) {
  const options = Object.assign({}, this.options.contentful, moduleOptions)

  const arrayEnvs = typeof options.environments === 'string'
    ? [options.environments]
    : options.environments
  
  // filter out environments
  const environments = Object.keys(arrayEnvs)
    .filter(env => options.activeEnvironments.includes(env))
    .map(env => ({ [env]: options.environments[env] }))
    .reduce((batch, env) => Object.assign({}, batch, env), {})

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: Object.assign({}, options, { environments })
  })
}
