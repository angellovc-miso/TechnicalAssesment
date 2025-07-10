# ¿Cómo configuras un servidor personalizado en Next.js?

Next ya tiene su propio servidor donde se encarga de manejar la mayor parte de las configuraciones necesarias durante el arranque para que el proyecto funcione.

Sin embargo, un proyecto puede requerir mayor control sobre el servidor a user debajo de next (express, hono, fastApi, etc).

Esto se puede lograr creando un archivo *server.ts*. Allí definiremos el servidor que queremos usar y le pasaremos el nextJs handler necesario

```
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})
```
> Este es un ejemplo tomado de la web https://nextjs.org/docs/pages/guides/custom-server


Puedes usar otro tipo de frameworks

```
import next from 'next'
import { Hono } from 'hono'
import { serve } from 'hono/node-server'

const dev = process.env.NODE_ENV !== 'production'
const nextApp= next({ dev })
const handle = nextApp.getRequestHandler()

const app = new Hono()

app.all('*', async (c) => {

  await handle(c.req.raw, c.res.raw)
  return c.html('') // Must return something, but Next wrote to res
})
```
> It will work as long as you set the nextApp handler
