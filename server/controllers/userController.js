import userModel from '../models/user.js';
import contactModel from '../models/contactinfo.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import transporter from '../config/emailconfig.js';
import bookingModel from '../models/booking.js';

class UserController {
    static userRegistration = async (req, res) => {
        const {name, email, password, confirmPassword, tc} = req.body;
        const user = await userModel.findOne({email:email});
        if (user) {
            res.send({"status":"failed", "message": "Email already exists"});
        } else {
            if (name && email && password && confirmPassword && tc) {

                if (password === confirmPassword) {

                    try {
                        const salt = await bcrypt.genSalt(10);
                        const hashPassword = await bcrypt.hash(password, salt);
                        const doc = new userModel({
                            name:name,
                            email:email,
                            password:hashPassword,
                            tc:tc
                        })

                        await doc.save();

                        const savedUser = await userModel.findOne({email:email});
                        //generate jwt token
                        const token = jwt.sign({userID: savedUser._id},process.env.JWT_SECRET_KEY, {expiresIn:"5d"});

                        res.status(201).send({"status":"Success", "message": "Registration successful", "token" : token});
                    }
                    catch (error) {
                        console.log(error);
                        res.send({"status":"failed", "message": "Unable to register"});
                    }

                } else {
                    res.send({"status":"failed", "message": "Passwords does nor match"});
                }

            } else {
               res.send({"status":"failed", "message": "All fields are required bro"});
            }
        }
    }

    static userLogin = async (req, res) => {
        try {

            const {email, password} = req.body;
            if (email && password) {

                const user = await userModel.findOne({email:email});
                if (user) {
                    const isMatch = await bcrypt.compare(password, user.password);
                    if ((user.email === email) && isMatch) {
                        //generate jwt token
                        const token = jwt.sign({userID: user._id},process.env.JWT_SECRET_KEY, {expiresIn:"5d"});
                        res.send({"status":"Success", "message": "Login successful", "token":token});
                    } else {
                        res.send({"status":"failed", "message": "Email or password does not match"});
                    }
                } else {
                    res.send({"status":"failed", "message" : "This email is not registered"});
                }

            } else {
                res.send({"status": "failed", "message" : "All fields are required"});
            }

        } catch (error) {
            console.log(error);
            res.send({"status":"failed", "message": "Unable to login"});
        }
    }
    static contactUs = async (req, res) => {
        try {

            const {name, email, message} = req.body;
            if (name && email && message) {
                try {
                    const doc = new contactModel({
                        name:name,
                        email:email,
                        message:message
                    })

                    await doc.save();
                
                res.send({"status":"Success", "message" : "Response submitted successfully"});
                } catch (error) {
                    console.log(error);
                    res.send({"status":"failed", "message": "Unable to contact"});
                }
            } else {
                res.send({"status": "failed", "message" : "All fields are required"});
            }

        } catch (error) {
            console.log(error);
            res.send({"status":"failed", "message": "Unexpected error"});
        }
    }

    static userBooking = async (req, res) => {
        const {source, destination} = req.body;
        // const user = await userModel.findOne({email:email});
        // if (user) {
        //     res.send({"status":"failed", "message": "Email already exists"});
        // } else {
            if (source && destination) {

                // if (password === confirmPassword) {
                    const date = new Date();

                    let day = date.getDate();
                    let month = date.getMonth() + 1;
                    let year = date.getFullYear();
                    
                    // This arrangement can be altered based on how we want the date's format to appear.
                    let currentDate = `${day}-${month}-${year}`;

                    let time = date.toLocaleTimeString();
                    try {
                        const doc = new bookingModel({
                            source: source,
                            destination:destination,
                            date:currentDate,
                            time:time
                        })

                        await doc.save();

                        // const savedUser = await userModel.findOne({email:email});
                        //generate jwt token
                        // const token = jwt.sign({userID: savedUser._id},process.env.JWT_SECRET_KEY, {expiresIn:"5d"});

                        res.status(201).send({"status":"Success", "message": "Booking done"});
                    }
                    catch (error) {
                        console.log(error);
                        res.send({"status":"failed", "message": "Unexpected error"});
                    }

                // } else {
                //     res.send({"status":"failed", "message": "Passwords does nor match"});
                // }

            } else {
               res.send({"status":"failed", "message": "All fields are required bro"});
            }
        // }
    }


    static changeUserPassword = async (req, res) => {
        const {password, confirmPassword} = req.body;
        if (password && confirmPassword) {

            if (password === confirmPassword) {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);
                await userModel.findByIdAndUpdate(req.user._id, {$set: {password: hashPassword}});
                res.send({"status":"Success", "message": "passwords changed successfully"});
            } else {
                res.send({"status":"failed", "message": "Passwords does not match"});
            }

        } else {
            res.send({"status":"failed", "message": "All fields are required"});
        }
    }

    static loggedUser = async (req, res) => {
        res.send({"user":req.user})
    }

    static sendUserPasswordResetEmail = async (req, res) => {
        const {email} = req.body;
        if (email) {
            const user = await userModel.findOne({email:email});
            if (user) {
                const secret = user._id + process.env.JWT_SECRET_KEY;
                const token = jwt.sign({userID: user._id}, secret, {expiresIn:'15m'});
                const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;
                // res.send({"status":"success", "message":"Email sent Successfully"});
                console.log(link);
                // send email

                // let info = await transporter.sendMail({
                //     from: process.env.EMAIL_FROM,
                //     to: user.email,
                //     subject: "Authentication Password Reset Link",
                //     html: `<a href=${link}>Click Here</a> to reset you password`
                // })
                res.send({"status":"Success", "message":"Email sent successfully"});
            } else {
                res.send({"status":"failed", "message":"user is not registered"});
            }
        } else {
            res.send({"status":"failed", "message":"email is required"});
        }
    }

    static userPasswordReset = async (req, res) => {
        const {password, confirmPassword} = req.body;
        const {id, token} = req.params;
        const user = await userModel.findById(id);
        const new_secret = user._id + process.env.JWT_SECRET_KEY;
        try {
            jwt.verify(token, new_secret);
            if (password && confirmPassword) {
                if (password === confirmPassword) {
                    const salt = await bcrypt.genSalt(10);
                    const hashPassword = await bcrypt.hash(password, salt);
                    await userModel.findByIdAndUpdate(user._id, {$set: {password: hashPassword}});
                    res.send({"status":"Success", "message":"Password reset Successfully"});
                } else {
                    res.send({"status":"failed", "message":"Passwords does not match"});
                }
            } else {
                res.send({"status":"failed", "message":"All fields are required"});
            }

        } catch (error) {
            console.log(error);
            res.send({"status":"failed", "message":"Invalid token"});
        }
    }
}

export default UserController;