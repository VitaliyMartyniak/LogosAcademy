const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const users = [];
app.use(cors());
app.get("/data", function (request, response) {
    response.send(users);
});

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'vitaliy7martynyak14@gmail.com',
        pass: 'B6gKmA12tsk'
    }
});


app.post('/data', function (req, res) {
    users.push(req.body);
    const mailOptions = {
        from: 'jane.doe@nike.com',
        to: 'vitaliy7martynyak14@gmail.com',
        subject: 'Subject',
        // html: `<h3> Name:</h3><p>${req.body.name}<p>
        //        <h3>Number:</h3><p>${req.body.number}<p>
        //        <h3>Wishes:</h3><p>${req.body.wishes}</p>`
        html: `<!doctype html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>MyDreamApp</title>
                    <base href="/">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="icon" type="image/x-icon" href="favicon.ico">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    </head>
                    <body>
                        <p>Hi there,</p>
                        <p>Somethimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                        <button type="button" class="btn btn-primary">Call To Action</button>
                        <p>This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                        <p>Good luck! Hope it works.</p>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
                </html>`
};
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err);
        console.log('email Sent', info);
    });
    res.send(200);
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);

