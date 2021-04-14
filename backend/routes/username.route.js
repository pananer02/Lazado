const express = require('express');
const usernameRoute = express.Router();

// username model
let UsernameModel = require('../models/username');

// get all data
usernameRoute.route('/').get((req,res,next)=>{
    UsernameModel.find((error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

// create username data
usernameRoute.route('/create-username').post((req,res,next)=>{
    UsernameModel.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

// edit username data
usernameRoute.route('/edit-username/:id').get((req,res,next)=>{
    UsernameModel.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

//update username data
usernameRoute.route('/update-student/:id').put((req,res,next)=>{
    UsernameModel.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log('username successfully updated')
        }

    })
})

//delete username data
usernameRoute.route('/delete-username/:id').delete((req,res,next)=>{
    UsernameModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = usernameRoute;