// GET all users
// GET user/id - get single user
// Post /users - create users
// PUT /users/:id - update
// Delete /users/:id - delete user

express()
  .use(bodyParser.json())
  .get("/users", (req, res, next) =>{
    db("users").then((users) => {
      if(!users){
        return res.send(400)
      }
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
  .put("/users", (req, res, next) => {
    db("users")
     .where("id", id)
     .update(req.body)
     .then((result) =>{
       if(result === 0){
         return res.sent(400)
       }
       res.send(200);
     }, next)
  })
  .delete("/users", (req, res, next) => {
    db("users")
     .where("id", id)
     .delete(req.body)
     .then((result) =>{
       if(result === 0){
         return res.sent(400)
       }
       res.send(200);
     }, next)
  })
  .listen(3000)
