import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

export default mongoose.models.User || mongoose.model('User', userSchema);