import mongoose from 'mongoose';
const { Schema } = mongoose;

const sessionSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      expires: {
        type: Date,
        required: true,
      },
      sessionToken: {
        type: String,
        required: true,
      },
      accessToken: {
        type: String,
        required: true,
      }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

export default mongoose.models.Session || mongoose.model('Session', sessionSchema);