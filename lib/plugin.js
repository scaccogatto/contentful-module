import clientBuilder from './client-builder'

export default (ctx, inject) => {
  // read from injected options
  const options = <%= JSON.stringify(options) %>
  
  inject('contentful', clientBuilder(options))
}
