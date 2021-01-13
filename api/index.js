const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.post('/api/form', (req, res) => {
    console.log(req.body)
    const { name, lastName, mensaje, email, asunto } = req.body
    const htmlEmail = `
    <div>
    <h3>Email Recibido de ${name} ${lastName}</h3>
    <ul>
        <li>De: ${name} ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Asunto: ${asunto}</li>
    </ul>
    <h3>Mensaje:</h3>
    <p>${mensaje}</p>
    </div>`;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    return sgMail.send({
        from: "maicoloncomilla@gmail.com",
        to: "maicoloncomilla@gmail.com",
        subject: "Vieron el CV",
        text: mensaje,
        html: htmlEmail
    })
    .then(r => res.status(200).send("Email enviado"))
})
const PORT = 3001
app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3001')
})