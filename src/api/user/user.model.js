import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username es requerido.'],
    unique: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  lastname: String,
  email: {
    type: String,
    lowercase: true
  },
  photo: String,
  provider: {
    type: String,
    required: [true, 'Provider es requrido.'],
    default: 'local'
  },
  roles: {
    type: Array,
    default: ['user']
  },
  status: {
    type: Number,
    default: 1,
    required: [true, 'Status es requerido.']
  },
  date: {
    type: Date,
    default: Date.now
  },
  last_login: {
    type: Date
  },
  social: {
    id: String,
    info: {}
  }
});

UserSchema.plugin(mongoosePaginate);

require('./user.methods').default(UserSchema);

export default mongoose.model('User', UserSchema);
