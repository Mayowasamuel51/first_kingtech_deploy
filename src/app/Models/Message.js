import mongoose, { Schema, model, models } from 'mongoose';

const StudentMessage = new Schema({
    message: {
        type:String
    }
})

const Message = mongoose.models.Message || model('message', StudentMessage)
export default Message