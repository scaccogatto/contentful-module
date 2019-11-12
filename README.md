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
    contentfulEnvironment: 'master',
    environments: {
      master: {
        space: '************',
        accessToken: '*******************************************'
      },
      staging: {
        space: '************',
        accessToken: '*******************************************'
      },
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
      this.$contentful.master.getEntries(...)
    }
  }
}
```

### Context

```js
export default {
  asyncData({ app }) {
    app.$contentful.master.getEntries(...)
  }
}
```
