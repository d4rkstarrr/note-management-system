const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        //Add || !origin to enable requests from sources without an origin like Postman/Swagger
        if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS Policy'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 //Default is 204, but sometimes smartTVs/older devices may face an issue
}

module.exports = corsOptions