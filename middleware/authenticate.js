const jwt = require('jsonwebtoken')

console.log("cookieToken1")

const authenticate = (req,res,next) => {
  console.log("cookieToken2")

    try {
        
        console.log("cookieToken3")
        let cookieToken = req.cookies.token;
        
        
        //const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(cookieToken, process.env.SECRET_KEY);

        req.userId = decode.Id
        req.userName = decode.Name
        
        next()


    }catch(error)
    {
        res.redirect('/login')
    }
    
}

module.exports = authenticate