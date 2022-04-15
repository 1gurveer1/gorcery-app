const express = require("express");
const router = express.Router();
const User = require("../model/User")
const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'gkang0084@gmail.com',
        pass: 'rambo2001'
    },

    tls: {
        rejectUnauthorized: false
    }

})

let OTP = null

function otpgenerator() {
    OTP = null
}


router.get("/getadmin", async (req, res) => {

    try {

        const user = await User.find({ email: 'admin@gmail.com' })
        res.json(user)

    } catch (error) {

        res.status(404).json("Error Occurred")

    }

});

router.post("/register", async (req, res) => {

    const { name, email, password, confirm_password } = req.body

    const newUser = new User({ name, email, password, confirm_password })

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/login", async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await User.find({ email, password })

        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                _id: user[0]._id
            }
            res.send(currentUser);
        }
        else {
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
        return res.status(400).json({ message: 'Something went weong' });
    }

});

router.get("/getallusers", async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/deleteuser", async (req, res) => {

    const userid = req.body.userid

    try {
        await User.findOneAndDelete({ _id: userid })
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/edituser", async (req, res) => {

    const { email, password, confirm_password,otp } = req.body

    try {

        if(OTP == otp)
        {
            const data = await User.findOne({ email: email })

            data.password = password,
                data.confirm_password = confirm_password

            await data.save()

            res.send('Updated successfully')
        }
        
        else
        {
            res.send('OTP Expired')
        }
        

    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/getid", async (req, res) => {

    const dataemail = req.body.dataemail

    try {

        OTP = Math.floor(Math.random() * (9 * (Math.pow(10, 5)))) + (Math.pow(10, 5));
        
        const data = await User.findOne({ email: dataemail })

        var mailOptions = {
            from: 'gkang0084@gmail.com',
            to: data.email,
            subject: 'Your OTP',
            html: `
                    <h2> Use this OTP to Reset Your Password</h2>
                    <h4> Message : otp will expire in 50 seconds</h4>
                    <h4> OTP : ${OTP}</h4>`
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            }
            else {
                res.json('success')
                console.log('OTP sent')
            }
        })

        setTimeout(() => {
            otpgenerator()

        }, 50000);

        res.json('Otp sent successfully');

    } catch (error) {
        return res.status(400).json(error);
    }

});

module.exports = router