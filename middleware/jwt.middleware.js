const User = require('../model/User')

exports.authentication = async(req, res, next) => {
    try {
        const auth = req.header('Authorization')
        if(!auth) res.status(422).send({error: 'unauthorization user'})

        const token = auth.substr(auth.indexOf(" ")+1)
        const user = await User.findByToken(token, res)
        req.user = user
        if(!user) res.status(422).send({error: 'unauthorization user'})
        return next()         

    } catch (error) {
        res.status(422).send({error: error})
    }
}