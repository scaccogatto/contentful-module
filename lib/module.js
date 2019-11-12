import path from 'path'

export default function Contentful (moduleOptions) {
  const options = Object.assign({}, this.options.contentful, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: Object.assign(
      {},
      options,
      { environments: { [options.contentfulEnvironment]: options.environments[options.contentfulEnvironment] }
    })
  })
}
