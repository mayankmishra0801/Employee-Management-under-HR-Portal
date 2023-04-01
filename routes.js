const express = require('express');

const router = express.Router();

const Employee = require('./employee.js');
const ObjectId = require('mongoose').Types.ObjectId


//get single Employee object

// router.get('/:id',async(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//        console.log(req.params.id)
//      let data =  await  Employee.findById(req.params.id)
//      res.send(data)

        
//     }else{
//         res.send(data)
//     }
// })






//get API

router.get('/emp',async(req,res)=>{

//  await   Employee.find({},"",(err,doc)=>{
    
//     if(err){
//         console.log('Error in GET data' + err);

//     }else{
//          res.send(doc);
//     }
//  })

const data = await Employee.find({})

res.send(data)
    
})




//post API

router.post('/', async (req,res)=>{
   
    let emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        dept : req.body.dept,
    });
  
  const data = await  emp.save()
  res.json(data)

})

module.exports = router;
