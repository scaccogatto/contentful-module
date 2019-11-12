# Contentful Module

> multiple-env Contentful generator

## Install

`npm i contentful-module`

```js
// nuxt.config.js
export default {
  modules: [
    'contentful-module'
  ],
  contentful: {
    // the default callable env (accessible from $contentful.client)
    default: process.env.NODE_ENV,
    // a list of included environments, or a single env (like: 'production')
    // this is useful when you should filter out some credetials
    activeEnvironments: [process.env.NODE_ENV, 'test'],
    environments: {
      production: {
        space: '************',
        accessToken: '*******************************************'
      },
      staging: {
        space: '************',
        accessToken: '*******************************************'
      },
      development: {
        space: '************',
        accessToken: '*******************************************'
      },
      test: {
        space: '************',
        accessToken: '*******************************************'
      }
    }
  }
}
```

## Usage

### Components

```js
export default {
  methods: {
    myMethod() {
      // this.$contentful.environments.production.getEntries(...)
      // this.$contentful.environments.test.getEntries(...)
      this.$contentful.client.getEntries(...)
    }
  }
}
```

### Context

```js
export default {
  asyncData({ app }) {
    // app.$contentful.environments.production.getEntries(...)
    // app.$contentful.environments.test.getEntries(...)
    app.$contentful.client.getEntries(...)
  }
}
```
