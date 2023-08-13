const router = require('express').Router();
const jwt =require("jsonwebtoken");
const Employee = require('../model/employeeData')
router.get('/employeelist',async(req,res)=>{
    try {
        let data = await Employee.find()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
router.get('/employeelist/:id',async(req,res)=>{
    try {
        let id = req.params.id
        let data = await Employee.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/employeelist',async(req,res)=>{
    try {
        console.log(req.body)
        const { empname, empsection, salary } = req.body;
        const employeelist = await Employee({empname, empsection, salary  });
        employeelist.save()  ;
        res.json({message:"Created Succesfully"});
   
        
    } catch (error) {
        console.log(error)
        res.json('error')
    }
})
router.put('/employeelist/:id',async(req,res)=>{
    try {
       id = req.params.id
       let updateData = {$set:req.body}
       const updated = await Employee.findByIdAndUpdate(id, updateData)
        res.json({message:"Updated successfully"})
    } catch (error) {
        // console.log(error)
        res.send('error')
    }
})
router.delete('/employeelist/:id',async(req,res)=>{
    try {
        let id = req.params.id
       const updated = await Employee.findByIdAndDelete(id)
       res.json({message:"Deleted successfully"})
    } catch (error) {
        console.log(error)
        res.send('error')
    }
})
module.exports = router