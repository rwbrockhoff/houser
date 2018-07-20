

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

        dbInstance.post_house(name, address, city, state, zip).then( () => {
           
            res.status(200).send(console.log('All Good!'))

        })
        .catch( (error) => {
            res.status(500).send(error)
        })
    }, 
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;

        dbInstance.delete_house(id).then( () => {
            res.status(200).send(console.log('Successful delete'))
        })
        .catch ( (error) => {
            res.status(500).send(error)
        })
    }
}   