"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "1234",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isAdmin": true
}
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new  mongoose.Schema({

  username: {
  type: String,
  trim: true,
  required:true,
  unique:true

  },

  password: {
    type: String,
    trim: true,
    required:true,
  
    },

    email: {
        type: String,
        trim: true,
        required:true,
        unique:true
      
        },

        firstName: {
            type: String,
            trim: true,
            required:true,
          
            },

            lastName: {
                type: String,
                trim: true,
                required:true,
              
                },
 

     isActive: {
                 
      type:Boolean,
      default:true,
    
     },
     isAdmin: {
                 
        type:Boolean,
        default:false,
     },

} , {collection: 'users', timestamps:true })

/* ------------------------------------------------------- */


const passwordEncrypt = require('../helpers/passwordEncrypt')
UserSchema.pre('save', function(next)  {
  

    const isEmailValidated = /w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)

    if (isEmailValidated)  {
  
        const isPasswordValidated = RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&]).{8,}$").test(this.password)

        if (isPasswordValidated)  {
      
          this.password = passwordEncrypt(this.password)
          next ()  // allow to save 
        } else {

            next (new Error('Password not validated.'))
        }
    }
 
})

module.exports = mongoose.model('User', UserSchema)