module.exports = (app, db) => {
    app.get("/posts", (req, res) =>
        db.post.findAll().then((result) => res.json(result))
    );

    app.post("/posts", (req, res) => {
        let newPost = req.body;
        db.post.create(newPost).then(createdPost => {
            res.json(createdPost);
        });
    });

    // app.get( "/post/:id", (req, res) =>
    //     db.post.findByPk(req.params.id).then( (result) => res.json(result))
    // );
    //
    // app.post("/post", (req, res) =>
    //     db.post.create({
    //         title: req.body.title,
    //         content: req.body.content
    //     }).then( (result) => res.json(result) )
    // );
    //
    // app.put( "/post/:id", (req, res) =>
    //     db.post.update({
    //             title: req.body.title,
    //             content: req.body.content
    //         },
    //         {
    //             where: {
    //                 id: req.params.id
    //             }
    //         }).then( (result) => res.json(result) )
    // );
    //
    // app.delete( "/post/:id", (req, res) =>
    //     db.post.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then( (result) => res.json(result) )
    // );
};