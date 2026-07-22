import express from "express"
import dotenv from "dotenv"
dotenv.config();


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

var users = []

app.get("/api/health", (req, res) => {
    res.send("Hello");
});


app.post("/api/create-user", (req, res) => {
    const {email, password} = req.body

    const userObj = {
        email,
        password
    }
    users.push(userObj);
    res.status(200).json({
        message: "user created success",
        status: true,
        data: userObj
    })
})

console.log("hello")

app.get("/api/all", (req, res) => {

    
    res.status(200).json({
        message: "User Fetched!",
        data: users
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));
