import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
    name: String,
    id: String,
    url: String,
});

let Image;
if (mongoose.models.Images) {
  Image = mongoose.model('Images');
} else {
  Image = mongoose.model('Images', imageSchema);
}

export default Image;