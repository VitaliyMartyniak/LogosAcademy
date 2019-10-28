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
            let users = await db.author.findAll();
            res.json(users);
            // res.json(createdUser);
        });
    });
};