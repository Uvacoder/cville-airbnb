export default function(context, inject){
    const appId = 'QXGX8RCAML'
    const apiKey = 'f0ecada6cb5d32e6496eb1e42c3d7bbd'

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId){
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers:{
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId,
            }
        })
        const json = await response.json()
        return json
    }
}