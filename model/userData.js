const mongoose =require('mongoose');
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
       },
        address:{
            type:String,
            required:true
          },
            email:{
                type:String,
                required:true
               },
                phone:{
                    type:String,
                    required:true
                  },
                    password:{
                        type:String,
                        required:true
                     },
                     role:{
                      type:String,
                      required:true
                   },
  
    
})
    // username:{
    //     type:String,
    //     required:true
    //    },
       
    //    password:{
    //        type:String,
    //        required:true
    //        },
    //           role:{
    //             type:String,
    //            required:true
    //                },
  
    
// })

const UserModel=mongoose.model('userlist',UserSchema);
module.exports=UserModel;