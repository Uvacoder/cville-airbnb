import userRouter from './routers/user'
import homesRouter from './routers/homes'
import getApis from './apis'

export default function (app, config) {
    const apis = getApis(config.algolia)
    app.use('/user', userRouter(apis))
    app.use('/homes', homesRouter(apis))
}
