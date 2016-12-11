const express = require("express")
const sessions = require("express-sessions")

express()
  .use(session({secret: "I love dogs", resave: false, saveUninitialized: false}))
  .get("/", (req, res, next) => {
    res.send(req.session)
  })
  .get("/set", (req, res, next) => {
    req.session.name = "yuriy"
    res.send(req.session)
  })
  .listen(3000)
