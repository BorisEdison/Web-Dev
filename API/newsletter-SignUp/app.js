// jshint esversion: 6
const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req,res){
    var firstName = req.body.fName
    var lastName = req.body.lName
    var email = req.body.email

    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }
    var jsonData = JSON.stringify(data)

    const url = "https://us14.api.mailchimp.com/3.0/lists/800cdb4e0b"

    const options = {
        method: "POST",
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})