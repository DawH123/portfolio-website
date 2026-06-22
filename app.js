const { response } = require('express')
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

function sendEmail(){
    return new Promise((resolve , reject) => {

    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'dawsonjholmes@gmail.com',
            pass:'pfcz xgni mltp lpqy'
        }
    })

    const mail_configs ={
        from:'pinkeraser447@gmail.com',
        to:'dawsonjholmes@gmail.com',
        subject:'TThis is a test numnuts!!',
        text: "yeahhhhhh this is a test brother"
    }
    transporter.sendMail(mail_configs , function(error, info){
        if(error){
            console.log(error)
            return reject({message:`an error has ocurred`})
        }
        return resolve({message:"Email sent successfully"})
    })

    })

}

app.get('/',(req,res) => {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

