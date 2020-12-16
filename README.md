# NuxtJS Contentful Module

> multiple environment Contentful client binding for NuxtJS

## Features

- [x] Makes `this.$contentful` and `app.$contentful` globally available so you can easily fetch Contentful data everywhere
- [x] Supports multiple environments, so you can switch easily
- [x] Available in SSR context (`asyncData`)

## Install

### Install the module
`npm i contentful-module`

### Find your API keys

1. Open your Contentful panel
2. Settings
3. API keys
4. Add API key (top right button)
5. Use Space ID and Content Delivery API - access token in your `nuxt.config.js`

### Edit `nuxt.config.js`

```js
// nuxt.config.js
export default {
  build: {
    transpile: ['contentful-module']
  },
  modules: [
    'contentful-module'
  ],
  contentful: {
    default: 'master',
    activeEnvironments: ['master'],
    environments: {
      master: {
        space: 'YOUR_SPACE_ID',
        accessToken: 'CONTENT_DELIVERY_API_ACCESS_TOKEN',
        environment: 'master'
      }
    }
  }
}
```

## Usage

### Contentful docs

You can use `$contentful.client` as explained on [Content Delivery API Docs](https://www.contentful.com/developers/docs/references/content-delivery-api/)

### Components (`.vue` files)

```js
export default {
  methods: {
    myMethod() {
      // same as: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/content-type/query-entries/console/js
      this.$contentful.client.getEntries({
        content_type: '<content_type_id>'
      )}
    }
  }
}
```

### Context

```js
export default {
  asyncData({ app }) {
    // same as: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/content-type/query-entries/console/js
    app.$contentful.client.getEntries({
      content_type: '<content_type_id>'
    )}
  }
}
```

### Single Environment

```js
// nuxt.config.js
export default {
  build: {
    transpile: ['contentful-module']
  },
  modules: [
    'contentful-module'
  ],
  contentful: {
    default: 'master', // this will be available by calling this.$contentful.client
    activeEnvironments: ['master'], // useful when you need to activate an environment by using process.env vars
    environments: {
      master: {
        space: 'YOUR_SPACE_ID',
        accessToken: 'CONTENT_DELIVERY_API_ACCESS_TOKEN',
        environment: 'master'
      }
    }
  }
}
```

Now you will be able to:

- [x] Call `master` environment by using `this.$contentful.client`

### Multiple Environments

```js
// nuxt.config.js
export default {
  build: {
    transpile: ['contentful-module']
  },
  modules: [
    'contentful-module'
  ],
  contentful: {
    default: 'master', // this will be available by calling this.$contentful.client
    activeEnvironments: ['master', 'staging'], // useful when you need to activate an environment by using process.env vars
    environments: {
      master: {
        space: 'YOUR_SPACE_ID',
        accessToken: 'CONTENT_DELIVERY_API_ACCESS_TOKEN',
        environment: 'master'
      },
      staging: {
        space: 'YOUR_SPACE_ID',
        accessToken: 'CONTENT_DELIVERY_API_ACCESS_TOKEN',
        environment: 'staging'
      }
    }
  }
}
```

Now you will be able to:

- [x] Call `master` environment by using `this.$contentful.client` or `this.$contentful.master`
- [x] Call `staging` environment by using `this.$contentful.staging`
