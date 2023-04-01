const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', err => {

  
   if(!err){
    console.log('DB Connected Successfully');
   }else{
    console.log('Error in Connection' + err);
   }

});

module.exports =  mongoose;
