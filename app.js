const express = require('express');
const createHttpErrors = require('http-errors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//helps display executed request to whichever routes plus status code of request
app.use(morgan('dev'));

//initialize app engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/auth.route'));
app.use('/user', require('./routes/user.route'));

app.use((req, res, next) =>{
    next((createHttpError.NotFound()));
});

//handling http Errors
app.use((req, res, next) =>{
   error.status = error.status || 500;
   res.status(error.status);
   res.send(error);
});

const PORT = process.env.PORT || 5000;

//connection to mongo db
mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
.then(() => {
    console.log('Connected!!');
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
})
.catch((err)=> console.log(err.message));
