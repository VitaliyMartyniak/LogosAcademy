module.exports = (app, db) => {
    app.get("/author/:id", (req, res) =>
        db.author.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.get("/author", (req, res) => {
        let name = req.query.firstName;


        db.author.findAll({
            where: {
                firstName: name
            }
        }).then(users => {
            res.json(users);
        });
    });

    app.post('/author', (req, res) => {
        let newUser = req.body;

        db.author.create(newUser).then(async createdUser => {
            // db.author.validate();
            let users = await db.author.findAll();
            res.json(users);
            // res.json(createdUser);
        });
    });

    app.delete('/author/:id', async (req, res) => {
        let id = req.params.id;

        await db.author.destroy({
            where: {id: id}
        }).then(deletedAuthor => {
            console.log(deletedAuthor);
            res.send({message: `Deleted ${id}`});
        });
    });


    app.put('/author', async (req, res) => {
        let data = req.body;

        let myUser = await db.author.findByPk(data.id);
        delete data.id;


        await myUser.update(data).then(result => {
            res.json(result);
        });
    });
};