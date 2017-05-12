// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    'googleAuth' : {
        'clientID'         : '874448586494-10isa3kvgp73l1lqg67lo52uagb2ia3h.apps.googleusercontent.com',
        'clientSecret'     : 'eIvuihSazTSKalK9KRmGSyca',
        'callbackURL'      : 'http://localhost:3001/auth/google/callback'
    }

};
