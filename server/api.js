import express from 'express'
import algolia from './algolia'
import cloudinary from './cloudinary'
import auth from './auth'
import stripe from './stripe'
import { json } from 'body-parser'
import config from '#config'

const app = express()

app.use(json())

auth(app, config)
algolia(app, config)
cloudinary(app, config)
stripe(app, config)

export default app
