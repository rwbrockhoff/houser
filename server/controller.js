

module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses().then( (houses) => {
            res.status(200).send(houses)
        })
    },
   
    post: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let {name, address, city, state, zip} = req.body

        dbInstance.post_house().then( () => {
            res.status(200).send(console.log('All Good!'))
        })
    }
}   