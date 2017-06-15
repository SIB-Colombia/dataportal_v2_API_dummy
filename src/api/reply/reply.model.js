import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  text: String,
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

ReplySchema.plugin(mongoosePaginate);

export default mongoose.model('Reply', ReplySchema);
