import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';



const todoSchema = new mongoose.Schema({
    order:{ type: String, required: true ,default: 0, },
    todo: { type: String, required: true,unique:true },
   
});

export default mongoose.model('todos', todoSchema);