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
    plugins:[ '~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/auth.client' ],
    modules:['~/modules/auth', '~/modules/algolia', '~/modules/cloudinary'],
    buildModules:['@nuxtjs/tailwindcss'],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
    publicRuntimeConfig:{
        auth:{
            cookieName: 'idToken',
            clientId: '537712074419-0pao3sshf84cqqtaie3aumvmobmlseji.apps.googleusercontent.com',
        },
        algolia:{
            appId: 'QXGX8RCAML',
            key:'f0ecada6cb5d32e6496eb1e42c3d7bbd',
        }
    },
    privateRuntimeConfig:{
        algolia:{
            appId: 'QXGX8RCAML',
            key: '739175c49753db77b422766b417678b1',
        },
        cloudinary:{
            apiSecret: 'Hner5MurgYTJLMQQ9F36P8msRN0',
        }
    },

}