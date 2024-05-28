import mongoose from 'mongoose';
const { Schema } = mongoose;


const imageSchema = new Schema({
    name: String,
    id: String,
    url: String,
});

export default mongoose.models.Image || mongoose.model('Images', imageSchema);