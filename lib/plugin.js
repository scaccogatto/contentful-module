import clientBuilder from 'contentful-module/lib/client-builder.js'

export default (ctx, inject) => {
  // read from injected options
  const options = <%= JSON.stringify(options) %>
  
  inject('contentful', clientBuilder(options))
}
