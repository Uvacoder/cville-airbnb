export default {
    components: true,
    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs:{
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks: false,
    },
    plugins:[ 
        '~/plugins/maps.client', 
        '~/plugins/dataApi', 
        '~/plugins/auth.client', 
        '~/plugins/vCalendar.client',
        '~/plugins/stripe.client',
    ],
    modules:[
        '~/modules/auth', 
        '~/modules/algolia', 
        '~/modules/cloudinary', 
        '@nuxtjs/cloudinary',
        '~/modules/stripe',
    ],
    buildModules:['@nuxtjs/tailwindcss', '@nuxt/image'],
    cloudinary:{
        cloudName: 'masteringnuxt',
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/masteringnuxt/image/upload/'
        }
    },
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    publicRuntimeConfig:{
        rootUrl: process.env.NODE_ENV === 'production' ? 'https://nuxtbnb.com' : 'http://localhost:3000',
        auth:{
            cookieName: 'idToken',
            clientId: '261771873987-d63fk0jh603nt8mi7sq7359kh1u0t2du.apps.googleusercontent.com',
        },
        algolia:{
            appId: 'Q6IFH1VAUQ',
            key:'929a498d223da96d79ee80fae0055203',
        },
        cloudinary:{
            apiKey: '296271252567571',
        },
        stripe:{
            key: "pk_test_51J8GecKgahg7NWo8nsIuypsePpQz0vRgczo9nN6QBo7qvXzHXAE9xPQkX8ivjs1OW947W9HGyUlO3bNJH1VzfwIO00xZSy1h4X",
        },
    },
    privateRuntimeConfig:{
        algolia:{
            appId: 'Q6IFH1VAUQ',
            key: process.env.ALGOLIA_SECRET_KEY,
        },
        cloudinary:{
            apiSecret: process.env.CLOUDINARY_SECRET_KEY,
        },
        stripe:{
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
    },

}