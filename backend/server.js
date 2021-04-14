let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser')

// connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser:true,
    userUnifiedTopology:true
}).then(()=>{
    console.log('Database connected succesfully')
}, error =>{
    console.log('Connot connect to database ' +- error)
})

const usernameAPI = require('../backend/routes/username.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// API
app.use('/api',usernameAPI);

//create port
const port = process.env.PORT || 4000;
const server = app.listen(port , () =>{
    console.log('Connected to port '+port)
})
// 404
app.use((req,res,next)=>{
    next(createError(404))
})
// error
app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})