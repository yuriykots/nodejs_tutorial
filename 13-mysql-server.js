// GET all users
// GET user/id - get single user
// Post /users - create users
// PUT /users/:id - update
// Delete /users/:id - delete user

express()
  .use(bodyParser.json())
  .get("/users", (req, res, next) =>{
    db("users").then((users) => {
      res.send(users)
    }, next)
  })
  .post("/users", (req, res, next) => {
    db("users")
      .insert(req.body)
      .then((userIds) =>{
        res.send(userIds)
      }, next)
  })

  
