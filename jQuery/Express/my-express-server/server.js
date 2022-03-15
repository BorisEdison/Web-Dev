const express = require("express")
const app = express()

app.get("/",function(request,response){                         // home route/ root route
    response.send("hello\n <h1>Hello, world!</h1>")
})

app.get("/contact",function(req,res){
    res.send("Contact me at: angela@gmail.comm")
})

app.get("/about",function(req,res){                              // about route
    res.send("My name is Boris and i love formula 1 and code.")
})

app.get("/hobbies",function(req,res){
    res.send("<ul><li>forumula 1</li><li>code</li><li>Typing fast</li></ul>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})