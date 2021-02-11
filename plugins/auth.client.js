export default ({ $config }) => {
    window.initAuth = init
    addScript()

    function addScript(){
        const script = document.createElement('script')
        script.src = "https://apis.google.com/js/platform.js?onload=initAuth"
        script.async = true
        document.head.appendChild(script)
    }

    function init(){
        window.gapi.load('auth2', async function() {
            const auth2 = await window.gapi.auth2.init({
                client_id: $config.auth.clientId,
            })
          });
        window.gapi.signin2.render('googleButton', {
            onsuccess: parseUser,
        })
    }

    function parseUser(user){
        const profile = user.getBasicProfile()
        console.log('Name:' + profile.getName())
        console.log('Image Url:' + profile.getImageUrl())
    }

}