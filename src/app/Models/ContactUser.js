import mongoose, { Schema, model, models } from 'mongoose';

const ContactUser = new Schema({
    name: {
        type: String,
        required:[true , 'please fill this field']
    },
    phone: {
        type: Number,
        required:[true , 'please fill this field']
    },
    email: {
        type: String,
    },
    message: {
        type:String
    }
})

const Contacts = mongoose.models.Contacts || model('contactus', ContactUser)
export default Contacts