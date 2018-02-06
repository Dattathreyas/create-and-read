
var express = require('express');
var router = express.Router();



var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/Demoh');

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


var fUserSchema = new mongoose.Schema({

    firstName : String,

    secondName : String

})

var formUsers = mongoose.model("formUsers",fUserSchema);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'form' });
});





router.post('/form', function(req, res, next) {


    var user = new formUsers({
        firstName : req.body.firstName,
        secondName : req.body.secondName

    });

    user.save(function (err, usermem){
        console.log(usermem)

    })



    res.render('form.ejs', { title: 'Express' });

    });





    router.get('/form_usersshow', function(req, res, next) {

        formUsers.find({},function(err, formUsers) {

            res.render('form_usersshow.ejs', { formUsers: formUsers });
            console.log(formUsers)

        })


    });




module.exports = router;
