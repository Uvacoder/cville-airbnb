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
        cloudName: 'dzxztzdg4',
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dzxztzdg4/image/upload/'
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
        rootUrl: process.env.NODE_ENV === 'production' ? 'https://nuxt-bn-b-seven.vercel.app' : 'http://localhost:3000', 
        auth:{
            cookieName: 'idToken',
            clientId: '537712074419-0pao3sshf84cqqtaie3aumvmobmlseji.apps.googleusercontent.com',
        },
        algolia:{
            appId: 'QXGX8RCAML',
            key:'f0ecada6cb5d32e6496eb1e42c3d7bbd',
        },
        cloudinary:{
            apiKey: '751854148899179',
        },
        stripe:{
            key: "pk_test_51IszI9HmBUTGMpy8hzjcu1w4uTUubuj4s3lECfzQtJ1EInR5w7oVXltvVck4GWBsX5AWOkPLKV0LWeeS30kZoYXr003sNXOxbF",
        },
    },
    privateRuntimeConfig:{
        algolia:{
            appId: 'QXGX8RCAML',
            key: '739175c49753db77b422766b417678b1',
        },
        cloudinary:{
            apiSecret: 'Hner5MurgYTJLMQQ9F36P8msRN0',
        },
        stripe:{
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
    },

}