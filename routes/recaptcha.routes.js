const router = require("express").Router()
const axios = require('axios')
const nodemailer = require("nodemailer")
const ReCAPTCHA = require ("react-google-recaptcha")

// Auth with mail provider
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_ME,
        pass: process.env.PASS_ME
    }
})
 
// POST
router.post('/submit-form', async (req, res) => {
    const { recaptcha, name, mail, message } = req.body;

    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: recaptcha,
                remoteip: req.ip
            }
        })

        const { success } = response.data

        if (success) {
            const mailOptions = {
                from: process.env.USER_ME,
                to: process.env.USER_ME,
                subject: 'New Loveletter from my website',
                text: `Name: ${name}, Email: ${mail}, Message: ${message}`
               //text: `Name: ${name}\nEmail: ${mail}\nMessage: ${message}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error)
                    res.status(500).send('Internal server error.')
                } else {
                    console.log('Email sent:', info.response)
                    res.status(200).send('Form submitted successfully.')
                }
            })
        } else {
            res.status(400).send('reCAPTCHA verification failed.')
        }
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error)
        res.status(500).send('Internal server error.')
    }
})


module.exports = router