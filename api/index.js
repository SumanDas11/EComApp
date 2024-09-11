// import 'react-native-get-random-values';
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const crypto = require("crypto");
const nodemailer = require("nodemailer");

// const { useContext } = require('react');
// const { UserContext } = require('../UserContext');

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
app.listen(port, () => {
    console.log("Server is running on ", { port });
});

// proj:"EComApp"/"mongodb+srv://sumandasaec:qcufRtyah7YyWkIQ@cluster0.clqp00i.mongodb.net/"
// proj:"EComAppI2"/"mongodb+srv://sumandasaec:QX5WfnUxbt2xycwD@cluster0.ynvg95w.mongodb.net/"
mongoose
    .connect("mongodb+srv://sumandasaec:qcufRtyah7YyWkIQ@cluster0.clqp00i.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
    });

const User = require("./models/user");
const Order = require("./models/order");

// const { setUser } = useContext(UserContext); //21.Aug

// // function to send verification email to user
// // Nodemailer sumandas.per@gmail.com/"tzot pymh ahoq kxpa"/app name: "Nodemailer"
// //NodeMailer sumandas.aec@gmail.com/"sovx nwpw mbhi zbbe"/app name: "NodeMailer"
// const sendVerificationEmail = async (email, verificationToken) => {
//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         // Configure the email service or SMTP details here
//         service: "gmail",
//         auth: {
//             user: "sumandas.per@gmail.com",
//             pass: "SKD.1901",
//         },
//     });
//     // Verify connection configuration
//     transporter.verify((error, success) => {
//         if (error) {
//             console.error('Error verifying transporter configuration:', error);
//         } else {
//             console.log('Transporter configuration is valid:', success);
//         }
//     });

//     // Compose the email message
//     const mailOptions = {
//         from: "amazon.com",
//         to: email,
//         subject: "Email Verification",
//         text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
//     };

//     // Send the email
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log("Verification email sent successfully");
//     } catch (error) {
//         console.error("Error sending verification email:", error);
//     }
// };


// end point to register in the app
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        //create a new user
        const newUser = new User({ name, email, password });

        //generate and store the verification token
        // newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        // Save the user to the database
        await newUser.save();

        // Debugging statement to verify data
        console.log("New User Registered:", newUser);


        res.status(201).json({ message: "Registration successful from index.js" })

        // // Send verification email to the user
        // // Use your preferred email service or library to send the email
        // sendVerificationEmail(newUser.email, newUser.verificationToken);

    } catch (error) {
        console.log("error registering user: ", error);
        res.status(500).json({ message: "Registration failed" })
    }
})

// endpoint to login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        console.log("user: ", user);
        console.log("user._id: ", user._id);
        // setUser(user); //21.Aug
        if (!user) {
            return res.status(401).json({ message: "Email id is not registered" })
        }

        //check if password is correct
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" })
        }

        res.status(200).json({ message: "login successful from index.js" })

    } catch (error) {
        console.log("login error: ", error);
        res.status(500).json({ message: "Login failed" });
    }
})

// //endpoint to verify the email
// app.get("/verify/:token", async (req, res) => {
//     try {
//         const token = req.params.token;

//         //Find the user witht the given verification token
//         const user = await User.findOne({ verificationToken: token });
//         if (!user) {
//             return res.status(404).json({ message: "Invalid verification token" });
//         }

//         //Mark the user as verified
//         user.verified = true;
//         user.verificationToken = undefined;

//         await user.save();

//         res.status(200).json({ message: "Email verified successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Email Verificatioion Failed" });
//     }
// })

// endpoint to store a new address to the backend
app.post("/addresses", async (req, res) => {
    try {
        const { userId, address } = req.body;

        // find the user by user id
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // add the new address to the user's address array
        user.addresses.push(address);

        // save the updated user in the backend
        await user.save();
        res.status(200).json({ message: "Address created successfully" })
    } catch (error) {
        res.status(500).json({ message: "Error adding address" })
    }
})

// // endpoint to get all the addresses of a particular user
// app.get("/addresses/:userId", async (req, res) => {
//     try {
//         const userId = req.params.userId

//         const user = await User.findById(userId)
//         if (!user) {
//             return res.status(404).json({ message: "User not found" })
//         }

//         const addresses = user.addresses;
//         res.status(200).json({ addresses })
//     } catch (error) {
//         res.status(500).json({ message: "Error retriving the addresses" })
//     }
// })