const express = require("express")
const sessions = require("express-sessions")

express()
  .use(session({secret: "I love dogs", resave: false, saveUninitialized: false}))
  .get("/", (req, res, next) => {
    res.send("ok")
  })
  .listen(3000)
