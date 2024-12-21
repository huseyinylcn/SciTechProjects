const express = require("express");
const path = require("path")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const session = require('express-session')
const passport = require("passport")
const app = express();
const sql = require("mssql")

require("dotenv").config()



const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_OPTIONS_ENCRYPT === "true",
    enableArithAbort: true,
  },
};



app.use(
  session({
    secret: "739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: null,secure:false },
  })
);


app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});



app.set('view engine', 'ejs');
app.set('views', __dirname + '/view/site')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))


const main = require("./Router/main")
const login = require("./Router/login")



sql.connect(config).then(()=>{
  app.use("/",main)
  app.use("/login",login)
})










app.listen(3001, (err) => {
  if (err) console.log("server pasif");

  console.log("server active");
});
