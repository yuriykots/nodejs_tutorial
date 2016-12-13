const knex = require("knex")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
// that's format for importing Local

//We will start using LocalStrategy
passport.use(new LocalStrategy(authenticate))
//we will need to asycronictly check
function authenticate(email, password, done){
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if(!user || user.pasword !== password){
        return done(null, false, {message: "invalid user and password combination"})
      }
      done(null, user)
    }, done)
}
