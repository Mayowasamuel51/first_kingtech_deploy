import mongoose, { Schema, model, models } from 'mongoose';
const RegisterUser = new Schema({
    username: {
        type: String,
        // required:[true , 'please fill this field']
    },
    password: {
        type:String  
    },
    phone: {
        type: Number,
        // required:[true , 'please fill this field']
    },
    email: {
        type: String,
    },
    price: {
        type:Number,
    },
    profileimage: {
        type:String
    }
})
const Register = mongoose.models.Register || model('registerstudent', RegisterUser)
export default Register