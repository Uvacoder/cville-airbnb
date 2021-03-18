
import { getHeaders } from './helpers'
import userRouter from './routers/user'

export default function(){
    const algoliaConfig = this.options.privateRuntimeConfig.algolia
    const headers = getHeaders(algoliaConfig)

    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use('/api/user', userRouter(headers))
    })

}