# WIP

## Setup

## Deployment (Heroku)

Set `NPM_CONFIG_PRODUCTION=false on heroku`: 

```
heroku config:set NPM_CONFIG_PRODUCTION=false --app your-app-name
```

Without this devDependencies won't be installed on deployment, and your build will break.
