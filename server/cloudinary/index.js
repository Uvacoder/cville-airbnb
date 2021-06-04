import { createHash } from 'crypto'

export default function(app, config){
    app.use('/cloudinary/signature', setSignature)

    function setSignature(req, res){
        try{
            const sha1 = createHash('sha1')
            const payload = []

            Object.keys(req.body).forEach(key => {
                payload.push(`${key}=${req.body[key]}`)
            })

            sha1.update(payload.sort().join('&') + config.cloudinary.apiSecret)
            res.end(JSON.stringify({
                signature: sha1.digest('hex')
            }))
        }
        catch(error){
            console.error(error)
        }
    }
}
