import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  fileId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  text: String,
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reply'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

CommentSchema.plugin(mongoosePaginate);

export default mongoose.model('Comment', CommentSchema);
