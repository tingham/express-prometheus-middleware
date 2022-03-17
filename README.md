# express-prometheus-middleware

Exposes Prometheus metrics for express applications. Based on [@trussle/tricorder](https://www.npmjs.com/package/@trussle/tricorder).

By default, the module exposes information about Prometheus default metrics, garbage collection metrics and the duration and the throughput of each HTTP route that has been called at least once via endpoint `/metrics`. However, you can customize this behaviour via options.

Since version 1.0.0 the module supports all existing Node.js versions from 6.0.0. [express](https://www.npmjs.com/package/express) and [prom-client](https://www.npmjs.com/package/prom-client) are required as peer dependencies.

The module is write in TypeScript following the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html). If you find something not compliant with, please provide a pull request.

In general every pull request that will:

- Let the code be compliant to Google TypeScript Style Guide
- Improve performances
- Add features

are well accepted.

## Available options

| Options | Type | Meaning | Default value |
| - | - | - | - |
| collectDefaultMetrics | boolean \| Prometheus.DefaultMetricsCollectorConfiguration | Whether or not to collect Prometheus default metrics or configuration for prom-client | true |
| collectGCMetrics | boolean | Whether or not to collect garbage collection metrics | true |
| exclude | (req: express.Request): boolean | Avoid all matching routes to expose duration and throughput information | (req) => false |
| excludePaths | string[] | Avoid all matching paths to expose duration and throughput information | [] |
| url | string | The path to which expose metrics | /metrics |

## Usage

Require the module, instance an object and use the handler as an express middleware.

### Basic

```js
const express = require('express')
const { ExpressPrometheusMiddleware } = require('@matteodisabatino/express-prometheus-middleware')

const app = express()
const epm = new ExpressPrometheusMiddleware()

app.use(epm.handler)

app.listen(process.env.PORT, () => {
  console.log('Server has been started')
})
```

### Example of advanced usage

```js
const express = require('express')
const { ExpressPrometheusMiddleware } = require('@matteodisabatino/express-prometheus-middleware')

const app = express()
const epm = new ExpressPrometheusMiddleware({
  exclude: (req) => req.method === 'POST' && req.path === '/accounts'
  // This setting will prevent to generate duration and the throughput metrics
  // for route POST /accounts
})

app.use(epm.handler)

app.listen(process.env.PORT, () => {
  console.log('Server has been started')
})
```
