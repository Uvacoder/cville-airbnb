import stripeLib from 'stripe'
import getApis from './apis'
import { rejectHitBadRequest } from '../helpers'

export default function(){
    const algoliaConfig = this.options.privateRuntimeConfig.algolia
    const apis = getApis(algoliaConfig)
    const secretKey = this.options.privateRuntimeConfig.stripe.secretKey
    const stripe = stripeLib(secretKey)

    this.nuxt.hook('render:setupMiddleware', (app) => { 
        app.use('/api/stripe/create-session', createSession)
    })

    async function createSession(req, res){
        const body = req.body
        if(!body || !body.homeId || !body.start || !body.end || !body.start >= body.end){
            return rejectHitBadRequest(res)
        }
    }
}